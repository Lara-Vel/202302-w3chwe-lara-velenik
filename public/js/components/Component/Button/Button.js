import Component from "../Component.js";
export default class Button extends Component {
    #text;
    #typeButton;
    constructor(text, typeButton, parentElement, classCss = "") {
        super(parentElement, "button", classCss);
        this.#text = text;
        this.#typeButton = typeButton;
    }
    render() {
        super.render();
        this.element.textContent = this.#text;
        this.element.setAttribute("type", this.#typeButton);
    }
}
