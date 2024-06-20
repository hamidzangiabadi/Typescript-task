import { IButton } from "../interfaces/IButton";
import { ButtonKeyTypes } from "../enums/ButtonKeyTypes";

export class Button implements IButton {
  id: number;
  key: ButtonKeyTypes;
  label: string;
  link: string;

  constructor(id: number, key: ButtonKeyTypes, label: string, link: string) {
    this.id = id;
    this.key = key;
    this.label = label;
    this.link = link;
  }

  logButton() {
    console.log(
      `id : ${this.id}, key : ${this.key}, label : ${this.label}, link : ${this.link} `
    );
  }
}
