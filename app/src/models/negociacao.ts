import { Printable } from "../utils/printable.js";

export class Negociacao extends Printable{
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ){
        super();
    }

    public static createInstance(dataStr: string, quantidadeStr: string, valorStr: string) : Negociacao{
        const exp = /-/g;
        const date = new Date(dataStr.replace(exp, ','));
        const quantidade = parseInt(quantidadeStr);
        const valor = parseFloat(valorStr);
        return new Negociacao(date, quantidade, valor);
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public toStringLog(): string {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }
}