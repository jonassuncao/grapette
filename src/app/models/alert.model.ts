export enum AlertDataType {
  Warning,
  Success,
}
export interface AlertData {
  title?: string;
  message?: string;
  innerHtml?: string;
  type?: AlertDataType;
}
export interface AlertParams extends AlertData {
  confirm: boolean;
}
