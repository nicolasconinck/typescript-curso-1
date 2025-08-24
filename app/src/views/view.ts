import { logExecutionTime } from "../decorators/log-execution-time.js";

export abstract class View<T> {
    protected element: HTMLElement;

    constructor(selector: string) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element as HTMLElement;
        } else {
            throw Error(`Seletor ${selector} não existe no DOM`);
        }
    }
        
    @logExecutionTime()
    public updateView(model: T): void {
        this.element.innerHTML = this.template(model);
    }

    protected abstract template(model: T): string;
}