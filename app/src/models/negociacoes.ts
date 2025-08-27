import { Printable } from '../utils/printable.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes extends Printable {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public toStringLog(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}
