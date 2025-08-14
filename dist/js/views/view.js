export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    updateView(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
    template(model) {
        throw Error('Classe filha precisa implementar método template!');
    }
}
