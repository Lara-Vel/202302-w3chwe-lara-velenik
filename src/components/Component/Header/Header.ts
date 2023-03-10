import Component from "../Component.js";

export default class Header extends Component {
  #logo: string;
  constructor(text: string, parentElement: HTMLElement, classCss: string = "") {
    super(parentElement, "header", classCss);
    this.#logo = text;
  }

  render(): void {
    super.render();
    this.element.innerHTML = `
  <h1><img src="${this.#logo}" alt="pokemon logo"</h1>`;
  }
}
