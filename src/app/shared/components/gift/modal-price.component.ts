import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import SHARED_MODULES from '@app/shared';
import { AlertService } from '@service/alert.service';
import { QRCodeComponent } from 'angularx-qrcode';
import { head } from 'lodash';
import { MODAL } from '../modal';
import { CopyAndPaste } from '@app/shared/pix';

@Component({
  templateUrl: './modal-price.component.html',
  imports: [SHARED_MODULES, MODAL, QRCodeComponent, ClipboardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalPriceComponent implements OnInit {
  protected readonly data = inject(DIALOG_DATA);
  protected readonly pix = signal(null);
  private clipboard = inject(Clipboard);
  private alertService = inject(AlertService);

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
}
