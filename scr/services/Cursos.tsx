import ConfigsPadrao from "../api/ConfigsPadrao";

const configspadrao = new ConfigsPadrao();

export class Cursos{

showCursos =  async (id) => {

        const dados = { aluno: id} //, tipo: this.state.tipoAgenda //"Necessita do tipoAgenda"
        const json = JSON.stringify(dados);
        
        fetch( configspadrao.getUrlMain()+'/webservice/post/retorno/aluno/cursos/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: json
        })
            .then((response) => response.json())
            .then((result) => {

                if (result == 0) {
                    console.log("Aluno não cadastrado em nenhum curso")
                } else if(result == -1) {
                    console.log("Existem pendências financeiras. Entre em contato com a autoescola.")
                } else if(result == -2) {
                    console.log("Limite de aulas contratadas excedido.")
                } else if(result == -3) {
                    console.log("O curso está bloqueado.")
                } else if(result == -4) {
                    console.log("Não existem cursos dessa categoria.")
                } else {
                    
                    try {
                        let listMaster = [];
                        const teorico = [];
                        const categ = [];
                        
                        result.forEach(valor => {
                            teorico.push({ id: valor.id, exame: valor.teorico });
                            listMaster.push({
                                label: valor.nome,
                                value: valor.id,
                                chave: valor.id,
                                categoria: valor.categorias
                            });
                        });

                        console.log(listMaster) //listaCursos
                        console.log(teorico) //exame_teorico

                    } catch (error) {
                        console.log(error)
                    }
                }

            })
            .catch((error) => {
                console.log(error);
            });

    }

}