export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    toStringLog() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    isEquals(negociacoes) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}
//# sourceMappingURL=negociacoes.js.map