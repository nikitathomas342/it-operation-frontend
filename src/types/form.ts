export enum FormType {
  DATE = "date",
  TEXT = "text",
  DROPDOWN = "dropdown",
  TIME = "time",
}

export interface DropdownOption {
  label: string;
  value: string;
}
