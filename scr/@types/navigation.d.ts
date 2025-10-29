export declare global{
    
    // Controle para melhor uso nas rotas e um padrao para uso
    namespace ReactNavigation{
        interface RootParamList{
            home: undefined;
            map: { idtela: string}; // Pegamos um id que tratamos em tela de map, para distringuir clinicas, escolar .....
            login: undefined;
            soliticarsenha: undefined;
            regiaoselect: undefined;
            escolas: {idescola: string}; // Identificamo a escola selecionada
            detalhesescola: { id_detalhes } // Carregarmos a tela de informações previstas
            contrato: undefined;
            homeinterna: undefined;
            conteudovip: undefined;
            minhaconta: undefined;
            pacotedeservicos: undefined;
            homeagendamentos: undefined;
            // minhasaulas: undefined;
            // contato: undefined;
            homeservicos: undefined;
            paginaconteudo: {service_id: int};
            materialestudo: undefined;
            aulaspraticasmaterial: undefined;
            aulasteoricasmaterial: undefined;
            percursomaterial: undefined;
            linksuteismaterial: undefined;
            contatoescolas: undefined;
            loginescola:undefined;
            matriculese: undefined;
            parceiros: undefined;
            setinstrutores: undefined;
            minhasaulas: undefined;
            marcadata: undefined;
            selecionarhorario: undefined;
            confirmaragendamento: undefined;
            veiculos: undefined;
            naosouhabilitado: undefined;
            souhabilitado: undefined;

            /**
             * Agendamento 
             */
             aulaspraticasagendamento: undefined;
             viewlinks: {link: string};
             viewwebservice: {link: string};

            // Area externa Matricula online
            matriculaonline: undefined;
            fecomercio: undefined;
            marcarexame: undefined;
            solicarladv: undefined;
            cartaodoempresario: undefined;
            comochegarscreen: undefined;
            telarestricao: {contents: {}};
            dadosaula: {contents: {}};

        }
    }

}