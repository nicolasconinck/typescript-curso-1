import { MensagemView } from '../views/mensagem-view.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { DaysOfWeek } from '../enums/daysOfWeek.js';
import { logExecutionTime } from '../decorators/log-execution-time.js';
import { inspect } from '../decorators/inspect.js';
import { domInjector } from '../decorators/dom-injector.js';

export class NegociacaoController {

    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes;
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.negociacoesView.updateView(this.negociacoes);
    }
    
    @logExecutionTime(true)
    @inspect
    public adiciona(): void {
        const negociacao = Negociacao.createInstance(this.inputData.value, 
                                                    this.inputQuantidade.value, 
                                                    this.inputValor.value);

        if (this.isWorkingDay(negociacao.data)) {
            this.mensagemView.updateView('Apenas negociações em dias uteis são aceitas');
            return;
        }

        negociacao.data.setDate(12);
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.updateView('Negociação adicionada com sucesso');
    }

    private isWorkingDay(data: Date) {
        return data.getDate() > DaysOfWeek.Sunday 
            && data.getDate() < DaysOfWeek.Saturday
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    
    private updateView(message: string) : void {
        this.negociacoesView.updateView(this.negociacoes);
        this.mensagemView.updateView(message);
    }
}
