import ConfigsPadrao from "../../api/ConfigsPadrao";
import { CursosMatriculados } from "./CursosMatriculados";

export class NovoAgendamento{

    async getCursosMatriculados(id) {
        const configs = new ConfigsPadrao();
        var cursosMat = new CursosMatriculados();
        var url = configs.getUrlMain()+"/webservice/post/retorno/aluno/cursos/";
        const dados = { aluno: id , tipo: "pratica"}
        const json = JSON.stringify(dados);
        await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: json,
        })
        .then((response) => response.json())
        .then((responseJson) => {
            cursosMat.setCursosTodos(responseJson);
        })
        .catch((error) => {
            console.log('Error NovoAgendamento: ' + error);
        });
    }

}