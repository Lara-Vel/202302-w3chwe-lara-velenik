import Component from "../Component.js";
import Header from "../Header/Header.js";
import Button from "../Button/Button.js";
export default class App extends Component {
    #header;
    #button;
    #newButton;
    constructor(parentElement) {
        super(parentElement, "div", ".container");
        const parentHeader = document.querySelector(".root");
        this.#header = new Header("./pokemon-logo.svg", parentHeader, "header");
        this.#button = new Button("Avanzar", "button", this.element);
        this.#newButton = new Button("Retroceder", "button", this.element);
    }
    render() {
        super.render();
        this.#header.render();
        this.#button.render();
        this.#newButton.render();
    }
}
