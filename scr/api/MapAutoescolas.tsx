import { Ops } from "../components/Ops";
import ConfigsPadrao from "./ConfigsPadrao";
import { ContDistanceCords } from "../services/ContDistanceCords";

const configspadrao = new ConfigsPadrao();

export default class MapAutoEscolas{


    public static MARKS_GERAL = [];
    public static MARKS_LOCAL = [];
    /**
     * Aqui retorna todas as informações com todas as cfc com dados de:
     *  "bairro": "Centro",
        "cep": "56302150",
        "cidade": 2611101,
        "distance": "313,99",
        "distancia": 313.9858791913188,
        "endereco": "Tv. Dr. Júlio de Melo",
        "estado": "26",
        "id": 80,
        "latitude": "-9.39955366719306",
        "logo": null,
        "longitude": " -40.4939283585184",
        "nome": "AUTOESCOLA PETROLINA",
        "regiao": "CENTRO",
        "sigla": "AEP",
        "tipo": "AUTOESCOLAS",

     * @param tipo 
     * @param latitude 
     * @param longitude 
     * @returns 
     */
    async getMarcadoresMap(tipo, latitude, longitude){ // RegioesMap.js linha 52
        var contdistanceCords = new ContDistanceCords();
        console.log("baixando info mapas");     
        var arraymaps = []
        const dados = {
            opcao: tipo,
            latitude: latitude,
            longitude: longitude,
        };
        const json = JSON.stringify(dados);
        console.log(json);
        
        const url = configspadrao.getUrlMain()+"/webservice/post/retorno/partner/mapa-lista/";
        console.log('Url: '+url);
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
            arraymaps = responseJson;
            
            //var arraymap = contdistanceCords.ordenarDistance(arraymaps['mapa']);
            //console.log(arraymap);
            MapAutoEscolas.MARKS_GERAL = arraymaps['mapa'];//arraymap;
            
            var local_aux = contdistanceCords.getProximosdeCords(arraymaps['mapa']);
            MapAutoEscolas.MARKS_LOCAL = contdistanceCords.ordenarDistance(local_aux);
            this.removerIndexMaps();
        })
        .catch((error) => {
            console.log('Error MapEscolas: '+error);
            return (
                <Ops/>
                );
        });
        return MapAutoEscolas.MARKS_LOCAL;
        
    }

    getMarketsLocation(){
        return MapAutoEscolas.MARKS_LOCAL;
    }

    /**
     * Removendo as CFC que ja estao mais proximas da lista completa
     * para evitar repetições
     */
    async removerIndexMaps(){
        var map = MapAutoEscolas.MARKS_GERAL["mapa"];
        var pro = MapAutoEscolas.MARKS_LOCAL;
        
        
        var idx = 0;
        var newmap = [];
        
        for(var i = 0; i < map.length; i++){
            try{
                if(map[i].id != pro[idx].id){
                    newmap.push(map[i]);
                }else{
                    if((idx+1)<pro.length){
                        idx++;
                        
                    }
                }
            }catch(e){

            }
            
        }

        MapAutoEscolas.MARKS_GERAL["mapa"] = newmap;
        
    }

}
