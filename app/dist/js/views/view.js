export class View {
    constructor(selector, replaceScript) {
        this.replaceScript = false;
        if (replaceScript) {
            this.replaceScript = replaceScript;
        }
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Seletor ${selector} não existe no DOM`);
        }
    }
    updateView(model) {
        let template = this.template(model);
        if (this.replaceScript) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}
