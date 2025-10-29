import ConfigsPadrao from "../../api/ConfigsPadrao";

export class Instrutores{

    /* PEGAMOS OS INSTRUTORES E TEMOS ELES ASSIM AQUI
    Array [
        Object {
            "categorias": "A,B",
            "cor": "branco",
            "id": 11,
            "modelo": "Moto",
            "nome": "Samuel Thi",
            "placas": "AAA1111",
            "veiculo": "1",
        },
    ]
     */
    public static INSTRUTORES;

    setInstrutores(instrutores){
        Instrutores.INSTRUTORES = instrutores;
    }
    getInstrutores(){
        return Instrutores.INSTRUTORES;
    }

    async getInstrutoresApi(iduser, idcurso) {
        var mensagem = 0;
        const configs = new ConfigsPadrao();
        var url = configs.getUrlMain()+"/webservice/post/admin/retorna/instrutores/";
        const dados = { aluno: iduser, curso: idcurso, tipo: "teorica"}
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
            console.log(responseJson);
            if(responseJson.length>0){
                this.setInstrutores(responseJson);
            }else{
                if (responseJson == 0) {
                    console.log("[Instrutores.tsx] Não há instrutores desta categoria de curso.")
                    mensagem = 0;
                    return 0;
                }else if (responseJson == -2) {
                    console.log("[Instrutores.tsx] O aluno não possui aprovação no exame teórico.");
                    mensagem = -2;
                    return -2;
                }else{
                    
                }
            }
            
        })
        .catch((error) => {
            console.log('Error NovoAgendamento: ' + error);
        });
        
    }

}