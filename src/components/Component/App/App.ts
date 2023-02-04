import Component from "../Component.js";
import Header from "../Header/Header.js";

export default class App extends Component {
  #header: Header;

  constructor(parentElement: HTMLElement | null) {
    super(parentElement, "div");
    this.#header = new Header("./pokemon-logo.svg", this.element, "header");
  }

  render(): void {
    super.render();
    this.#header.render();
  }
}
