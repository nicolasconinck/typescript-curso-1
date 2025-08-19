export class View {
    constructor(selector, replaceScript = false) {
        this.replaceScript = false;
        this.element = document.querySelector(selector);
    }
    updateView(model) {
        let template = this.template(model);
        if (this.replaceScript) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}
