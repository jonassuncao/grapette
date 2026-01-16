import { Dialog } from "@angular/cdk/dialog";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AlertData, AlertDataType } from "../models";
import { AlertComponent } from "@app/shared/components/alert/alert.component";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor(private dialog: Dialog) {}

  public alert(data: AlertData): Observable<any> {
    return this.dialog.open(AlertComponent, {
      data: { ...data, type: AlertDataType.Warning },
      disableClose: true,
      width: "40rem",
    }).closed;
  }

  public success(data: AlertData): Observable<any> {
    return this.dialog.open(AlertComponent, {
      data: { ...data, type: AlertDataType.Success },
      width: "40rem",
    }).closed;
  }

  public confirm(data: AlertData): Observable<any> {
    const params = { ...data, type: AlertDataType.Warning, confirm: true };
    return this.dialog.open(AlertComponent, { data: params, width: "40rem" })
      .closed;
  }
}
