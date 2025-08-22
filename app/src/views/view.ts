export abstract class View<T> {
    protected element: HTMLElement;
    private replaceScript = false;

    constructor(selector: string, replaceScript?: boolean) {
        if (replaceScript) {
            this.replaceScript = replaceScript;
        }
        const element = document.querySelector(selector);
        if (element) {
            this.element = element as HTMLElement;
        } else {
            throw Error(`Seletor ${selector} não existe no DOM`);
        }
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