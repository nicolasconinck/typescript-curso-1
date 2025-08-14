export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    updateView(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
