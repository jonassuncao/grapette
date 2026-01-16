import { DIALOG_DATA } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { AlertDataType, AlertParams } from '@app/models';
import SHARED_MODULES from '@app/shared';
import { MODAL } from '../modal';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [SHARED_MODULES, MODAL],
  templateUrl: './alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  public readonly type = AlertDataType;

  constructor(@Inject(DIALOG_DATA) public data: AlertParams) {}

  public isType(type: AlertDataType): boolean {
    return this.data.type === type;
  }
}
