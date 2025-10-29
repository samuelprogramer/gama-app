import { Ops } from "../components/Ops";
import ConfigsPadrao from "./ConfigsPadrao";

const configspadrao = new ConfigsPadrao();


export class Parceiros{


    public static PARCEIROS = [];

    /**
     * Iremos pegar todo o banco de dados com todos os dados
     * 
     */
    async getParceiros() {
        await fetch(
            configspadrao.getUrlMain()+"/admin/webservice/get-parceiros/",
            {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                },
            }
        )
        .then((response) => response.json())
        .then((result) => {
            Parceiros.PARCEIROS = result;
        })
        .catch((error) => {
            console.log(error);
            return (
                <Ops/>
              );
        });
    }


    findCfcId(id_find){
        for(var c =0; c<Parceiros.PARCEIROS.length;c++){
            var cfc = Parceiros.PARCEIROS[c];
            if(cfc.id==id_find){
                return cfc;
            }
        }
    }
    findCfcNameCFC(name_find){
        for(var c =0; c<Parceiros.PARCEIROS.length;c++){
            var cfc = Parceiros.PARCEIROS[c];
            if(cfc.nome==name_find){
                return cfc;
            }
        }
    }
    

}


