import { ButtonKeyTypes } from "../enums/ButtonKeyTypes";

export interface IButton {
  id: number;
  key: ButtonKeyTypes;
  label: string;
  link: string;
}
