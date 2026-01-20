import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import SHARED_MODULES from '@app/shared';
import { CopyAndPaste } from '@app/shared/pix';
import { environment } from '@env/environment';
import { AlertService } from '@service/alert.service';
import { PaymentService } from '@service/payment.service';
import { RecaptchaService } from '@service/recaptcha.service';
import { QRCodeComponent } from 'angularx-qrcode';
import { head } from 'lodash';
import { take } from 'rxjs/operators';
import { MODAL } from '../modal';

@Component({
  templateUrl: './modal-price.component.html',
  imports: [
    SHARED_MODULES,
    MODAL,
    QRCodeComponent,
    ClipboardModule,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalPriceComponent implements OnInit {
  protected readonly data = inject(DIALOG_DATA);
  protected readonly http = inject(HttpClient);
  protected readonly dialogRef = inject(DialogRef);
  protected readonly recaptchaService = inject(RecaptchaService);
  protected readonly paymentService = inject(PaymentService);
  protected readonly pix = signal(null);
  protected readonly load = signal(false);
  protected payment: Signal<any>;
  protected readonly messageCtrl = new FormControl(null, [Validators.required]);
  private clipboard = inject(Clipboard);
  private alertService = inject(AlertService);

  constructor() {
    const id = head(this.data.img.match(/\d+/));
    this.payment = toSignal(this.paymentService.paymentTo({ item: id }), {
      initialValue: null,
    });
  }

  public ngOnInit() {
    const id = head(this.data.img.match(/\d+/));
    const hash = Date.now().toString(36).slice(-6).toUpperCase();
    this.pix.set(
      CopyAndPaste({
        name: 'Sarah E Jonathas',
        key: '62981640956',
        amount: Number(`${this.data.price.decimal}.${this.data.price.cents}`),
        city: 'Tatui',
        id: `J${id}S${hash}`,
      }),
    );
  }

  public onCopy() {
    this.alertService.success({
      innerHtml:
        '<h1 class="font-semibold not-italic font-raleway text-2xl">Copiado com sucesso!</h1> Abra o aplicativo do seu banco e insira o código copiado no campo \'Pix Copia e Cola\'.',
    });
    this.clipboard.copy(this.pix().payload);
  }

  public onSend(textarea: any) {
    if (this.messageCtrl.valid) {
      if (!this.load()) {
        this.load.set(true);
        const id = head(this.data.img.match(/\d+/));
        this.recaptchaService
          .execute((recaptcha) =>
            this.http
              .post(`${environment.api}/api/send`, {
                item: id,
                message: this.messageCtrl.value,
                recaptcha,
              })
              .pipe(take(1)),
          )
          .subscribe({
            next: () => {
              this.alertService.success({
                innerHtml:
                  '<h1 class="font-semibold not-italic font-raleway text-2xl">Mensagem enviada com sucesso!</h1>',
              });
              this.dialogRef.close(true);
            },
            error: (err) => {
              this.alertService.alert({
                innerHtml:
                  err?.error?.error ||
                  'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.',
              });
              this.load.set(false);
            },
          });
      }
    } else {
      this.load.set(false);
      this.messageCtrl.markAsTouched();
      textarea?.focus();
      textarea?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }
}
