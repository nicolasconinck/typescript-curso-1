var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { MensagemView } from '../views/mensagem-view.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { DaysOfWeek } from '../enums/daysOfWeek.js';
import { logExecutionTime } from '../decorators/log-execution-time.js';
import { inspect } from '../decorators/inspect.js';
import { domInjector } from '../decorators/dom-injector.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.negociacoesView.updateView(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.createInstance(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
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
__decorate([
    domInjector('#data')
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInjector('#quantidade')
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector('#valor')
], NegociacaoController.prototype, "inputValor", void 0);
__decorate([
    logExecutionTime(true),
    inspect
], NegociacaoController.prototype, "adiciona", null);
