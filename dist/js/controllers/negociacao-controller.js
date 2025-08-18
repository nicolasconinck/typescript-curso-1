import { MensagemView } from './../views/mensagem-view.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesView } from './../views/negociacoes-view.js';
import { DaysOfWeek } from '../enums/DaysOfWeek.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.updateView(this.negociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (this.isWorkingDay(negociacao.data)) {
            this.mensagemView.updateView('Apenas negociações em dias uteis são aceitas');
            return;
        }
        negociacao.data.setDate(12);
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.updateView('Negociação adicionada com sucesso');
    }
    isWorkingDay(data) {
        return data.getDate() > DaysOfWeek.Sunday
            && data.getDate() < DaysOfWeek.Saturday;
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    updateView(message) {
        this.negociacoesView.updateView(this.negociacoes);
        this.mensagemView.updateView(message);
    }
}
