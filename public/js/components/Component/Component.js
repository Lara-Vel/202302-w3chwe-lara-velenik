export default class Component {
    element;
    #parentElement;
    constructor(parentElement, tag, classCss = "") {
        this.element = document.createElement(tag);
        this.element.className = classCss;
        this.#parentElement = parentElement;
    }
    render() {
        this.#parentElement?.appendChild(this.element);
    }
}
