

/**
 * Essa parte do codigo é responsavem por manter uma conversa com todo o app dutante a navegação
 * do usuario, mantendo assim os dados alocados aqui por um tempo, evitando ir na api a todo momento
 */

export class DadosNavegacaoEscola{
    public static latitude = "";
    static longitude = "";
    public static escolaDadosMap = [];
    public static escolaDadosMap_internos = [];

    // Para facilitar o acesso ao contato de wts
    public static whatsapp_local = "";
    
    getLatitude(){
        return DadosNavegacaoEscola.latitude;
    }
    setLatitude(lat){
        console.log("set lat:"+lat);
        DadosNavegacaoEscola.latitude = lat;
    }
    getLongitude(){
        return DadosNavegacaoEscola.longitude;
    }
    setLongitude(long){
        DadosNavegacaoEscola.longitude = long;
    }
    setEscolasDadosMap(escola){
        console.log(escola);
        DadosNavegacaoEscola.escolaDadosMap = escola;
    }
    getEscolaDadosMap(){
        return DadosNavegacaoEscola.escolaDadosMap;
    }

    /*
        Object {
            "bairro": "Vila Eduardo",
            "cep": "56328000",
            "cidade": null,
            "distance": "314,42",
            "distancia": 314.422008940074,
            "endereco": "Av. Monsenhor Ângelo Sampaio",
            "estado": null,
            "id": 60,
            "latitude": "-9.39150805262763",
            "logo": null,
            "longitude": "-40.48901898913198",
            "nome": "AUTOESCOLA EXAME",
            "regiao": "CENTRO",
            "sigla": "AEP",
            "tipo": "AUTOESCOLAS",
        }
    */
    setEscolasDadosMap_interno(escolainter){
        DadosNavegacaoEscola.escolaDadosMap_internos = escolainter;
        DadosNavegacaoEscola.whatsapp_local = escolainter.whatsapp;
    }
    getEscolaDadosMap_interno() {
        return DadosNavegacaoEscola.escolaDadosMap_internos;
    }
    getWhatsapp_local(){
        return DadosNavegacaoEscola.whatsapp_local;
    }
    



}

