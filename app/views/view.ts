export abstract class View<T> {
    protected element: HTMLElement;
    private replaceScript = false;

    constructor(selector: string, replaceScript: boolean = false) {
        this.element = document.querySelector(selector);
    }
        
    public updateView(model: T): void {
        let template = this.template(model);
        if (this.replaceScript) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string;
}