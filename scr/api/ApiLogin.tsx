import ConfigsPadrao from "./ConfigsPadrao";
import { DadosUser } from "../services/DadosUser";

const configspadrao = new ConfigsPadrao();
const dadosUser = new DadosUser();
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ApiLogin{

    /**
     * Carregamento de todos os dados locais de user
     * para termos dados antes de pegar da api
     * mas verificarmos os dados em api para vermos como esta
     * 
     * 
     * 
     * Carregamos os dados na App.tsx inicial
     */
    public static DADOS_USER_LOGIN = {};
    async loadStorageLogin(){
        console.log("ApiLogin.tsx Carregando dados de login de usuario [21]");
        const jsonValue = await AsyncStorage.getItem('@dado_save_login');
        var result = JSON.parse(jsonValue).dadosuser;
        dadosUser.setUserCompleto(result)
        dadosUser.setAcesso(result.acesso)
        dadosUser.setAtendesabado(result.atendesabado)
        dadosUser.setAtendesemana(result.atendesemana)
        dadosUser.setBairro(result.bairro)
        dadosUser.setCelular(result.celular)
        dadosUser.setCep(result.cep)
        dadosUser.setCidade(result.cidade)
        dadosUser.setEmail(result.email)
        dadosUser.setEndereco(result.endereco)
        dadosUser.setEscola(result.escola)
        dadosUser.setEstado(result.estado)
        dadosUser.setIdUnidade(result.idUnidade)
        dadosUser.setIduser(result.iduser)
        dadosUser.setLogin(result.login)
        dadosUser.setLogo(result.logo)
        dadosUser.setLogoext(result.logoext)
        dadosUser.setNome(result.nome)
        dadosUser.setNomeContato(result.nomeContato)
        dadosUser.setNumero(result.numero)
        dadosUser.setStatus(result.status)
        dadosUser.setTelefone(result.telefone)
        dadosUser.setTelefone1(result.telefone1)
        dadosUser.setTelefone2(result.telefone2)
        dadosUser.setTelefone3(result.telefone3)
        dadosUser.setUnidade(result.unidade)
        dadosUser.setWhatsapp(result.whatsapp)

        dadosUser.setLogado(true) //setando o valor de LOGADO como TRUE
        ApiLogin.DADOS_USER_LOGIN = JSON.parse(jsonValue);
    }

    async signin(user, senha){

        var retorno = false;

        console.log('Running signin: ' + user + ' ' + senha)

        const dados = {
            user: user,
            senha: senha,
        };

        const json = JSON.stringify(dados);
        await fetch(
        configspadrao.getUrlMain() + "/webservice/post/web-login/",
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: json,
        })
        .then((response) => response.json())
        .then((result) => {

        console.log(result)

        if (result == 0 || result == -1) {
            //error
            retorno = false;
        } else {
            try {
                dadosUser.setUserCompleto(result)
                dadosUser.setAcesso(result.acesso)
                dadosUser.setAtendesabado(result.atendesabado)
                dadosUser.setAtendesemana(result.atendesemana)
                dadosUser.setBairro(result.bairro)
                dadosUser.setCelular(result.celular)
                dadosUser.setCep(result.cep)
                dadosUser.setCidade(result.cidade)
                dadosUser.setEmail(result.email)
                dadosUser.setEndereco(result.endereco)
                dadosUser.setEscola(result.escola)
                dadosUser.setEstado(result.estado)
                dadosUser.setIdUnidade(result.idUnidade)
                dadosUser.setIduser(result.iduser)
                dadosUser.setLogin(result.login)
                dadosUser.setLogo(result.logo)
                dadosUser.setLogoext(result.logoext)
                dadosUser.setNome(result.nome)
                dadosUser.setNomeContato(result.nomeContato)
                dadosUser.setNumero(result.numero)
                dadosUser.setStatus(result.status)
                dadosUser.setTelefone(result.telefone)
                dadosUser.setTelefone1(result.telefone1)
                dadosUser.setTelefone2(result.telefone2)
                dadosUser.setTelefone3(result.telefone3)
                dadosUser.setUnidade(result.unidade)
                dadosUser.setWhatsapp(result.whatsapp)

                dadosUser.setLogado(true) //setando o valor de LOGADO como TRUE
                this.setLoginAppSotrage(user, senha, result);
                retorno = true;
            }catch (error){
                retorno = false;
            }

        } 
    })

    return retorno;
    }

    getEmailuser(){
        return ApiLogin.DADOS_USER_LOGIN.email;
    }

    /**
     * Verificar se temos cadastra salvo locamente para da home irmos diretamente para a
     * area interna
     */
    getIsLoged(){
        try{
            var email = ApiLogin.DADOS_USER_LOGIN.email;
            var senha = ApiLogin.DADOS_USER_LOGIN.senha;
    
            if(email != null && email != ""){
                return true;
            }else{
                return false;
            }
        }catch(e){

        }
        
         
    }
    async setLoginAppSotrage(email, senha, dadosuser){
        var dadosuser_save = {
            email: email,
            senha: senha,
            dadosuser: dadosuser

        }
        ApiLogin.DADOS_USER_LOGIN.email = email;
        ApiLogin.DADOS_USER_LOGIN.senha = senha;
        
        try {
            console.log("ApiLogin.tsx Salvando dados de login [123]");
            await AsyncStorage.setItem('@dado_save_login', JSON.stringify(dadosuser_save))
        } catch (e) {
            console.log("ApiLogin.js - Errors em gravar dados de login de user [104]");
        }
        
    }
    async logOut(){
        try {
            ApiLogin.DADOS_USER_LOGIN.email = "";
            ApiLogin.DADOS_USER_LOGIN.senha = "";
            await AsyncStorage.setItem('@dado_save_login', "");
        } catch (e) {
            console.log("ApiLogin.js - Errors em gravar dados de login de user [104]");
        }
    }


}