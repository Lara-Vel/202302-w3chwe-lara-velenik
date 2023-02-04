import Component from "../Component.js";
export default class Header extends Component {
    #logo;
    constructor(text, parentElement, classCss = "") {
        super(parentElement, "header", classCss);
        this.#logo = text;
    }
    render() {
        super.render();
        this.element.innerHTML = `
  <h1><img src="${this.#logo}" alt="pokemon logo"</h1>`;
    }
}
