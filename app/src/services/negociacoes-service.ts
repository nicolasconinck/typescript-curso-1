import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
    
    public getNegociacoesToDay(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(response => { return response.json();})
            .then((data: NegociacoesDoDia[]) => {
                return data.map(given => {
                    return new Negociacao(new Date(), given.vezes, given.montante)
                })
            })
    }
}