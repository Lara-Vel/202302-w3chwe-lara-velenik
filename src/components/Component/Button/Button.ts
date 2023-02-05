import Component from "../Component.js";

export default class Button extends Component {
  #text: string;
  #typeButton: "button";
  constructor(
    text: string,
    typeButton: "button",
    parentElement: HTMLElement | null,
    classCss: string = ""
  ) {
    super(parentElement, "button", classCss);
    this.#text = text;
    this.#typeButton = typeButton;
  }
  render(): void {
    super.render();
    this.element.textContent = this.#text;
    this.element.setAttribute("type", this.#typeButton);
  }
}
