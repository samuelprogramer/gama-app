
import AsyncStorage from '@react-native-async-storage/async-storage';


export class DadosPremiacao{

    public static DADOS_PREMIACAO = {};

    async saveDadosPremiacaoLocal(){
        try {
            const jsonValue = JSON.stringify(DadosPremiacao.DADOS_PREMIACAO)
            await AsyncStorage.setItem('@storage_premiacao', jsonValue)
        } catch (e) {
            console.log("DadosPremiacao.tsx error: [14]" + e.message);
        }
    }

    async loadDadosPremiacao(){
        try {
            const jsonValue = await AsyncStorage.getItem('@storage_premiacao');
            DadosPremiacao.DADOS_PREMIACAO = JSON.parse(jsonValue);
        } catch(e) {
            console.log("DadosPremiacao.tsx erro load data: "+e);
        }
    }

    setDadosPremiacao(dados_pre){
        DadosPremiacao.DADOS_PREMIACAO = dados_pre;
    }
    getDadosPremiacao(){
        return DadosPremiacao.DADOS_PREMIACAO;
    }

}


