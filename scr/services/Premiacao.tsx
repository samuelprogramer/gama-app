import AsyncStorage from "@react-native-async-storage/async-storage";




export class Premiacao{

    public static PREMIACAO = null;

    async setPremiacao(dadospremiacao){
        Premiacao.PREMIACAO = dadospremiacao;
        try {
            console.log("Premiacao.tsx Salvando dados de premio [13]");
            await AsyncStorage.setItem('@dado_save_awars', JSON.stringify(dadospremiacao))
        } catch (e) {
            console.log("Premiacao.tsx - Errors em gravar dados de premio [17]");
        }
    }

    async LoadAwards(){
        try{
            const jsonValue = await AsyncStorage.getItem('@dado_save_awars');
            var result = JSON.parse(jsonValue);
            Premiacao.PREMIACAO = result;
            console.log("--------------- RESULT LOAD AWARS -----------------");
            console.log(result);
        }catch(e){
            console.log("Premiacao.tsx - Error load premiacao [24] "+e);
        }

    }

    /**
     * Verificando se temos premiação
     * false -> nao tem premiação
     * true -> tem premiação
     * @returns 
     */
    haveAwards(){
        return Premiacao.PREMIACAO != null;
    }

    /**
     * Pegando premiacao
     * {
     *   "code": "54491",
     *   "email": "******@gmail.com", 
     *   "id_user": "7", 
     *   "nome": "Samuel", 
     *   "nome_auto_escola": "AUTO ESCOLA DIGITALS", 
     *   "telefone": "0000000"
     * }
     */
    getAwards(){
        return Premiacao.PREMIACAO;
    }

}


