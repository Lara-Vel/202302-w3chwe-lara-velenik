import Component from "../Component.js";
import Header from "../Header/Header.js";
export default class App extends Component {
    #header;
    constructor(parentElement) {
        super(parentElement, "div");
        this.#header = new Header("./pokemon-logo.svg", this.element, "header");
    }
    render() {
        super.render();
        this.#header.render();
    }
}
