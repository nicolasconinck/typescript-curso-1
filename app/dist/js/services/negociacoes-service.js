import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    getNegociacoesToDay() {
        return fetch('http://localhost:8080/dados')
            .then(response => { return response.json(); })
            .then((data) => {
            return data.map(given => {
                return new Negociacao(new Date(), given.vezes, given.montante);
            });
        });
    }
}
//# sourceMappingURL=negociacoes-service.js.map