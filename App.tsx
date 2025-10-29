import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
// importando tema do app
import { THEME } from './scr/styles/theme';
// Fontes
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';

// Importando components
import { Loading } from './scr/components/Loading';
import { Routes } from './scr/routes';

import ApiLogin from './scr/api/ApiLogin';
import MapAutoEscolas from './scr/api/MapAutoescolas';
import { Premiacao } from './scr/services/Premiacao';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});
  var apiLogin = new ApiLogin();
  var mapAuto = new MapAutoEscolas();
  var premiacao = new Premiacao();

  /**
   * Função para carregamento de dados e configurações
   */
  async function loadDatasUserPreLoad(){
    apiLogin.loadStorageLogin();
    mapAuto.getMarcadoresMap("AUTOESCOLAS",0,0);
    premiacao.LoadAwards();
  }
  loadDatasUserPreLoad();

  return (
    <NativeBaseProvider theme={THEME}>
      {/*Configurações para a barra em cima da aplicacao
        ficar translucent
      */}
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Routes/>:<Loading/>/* Operador ternario para exibir ou a tela de carregamento ou a tela de login  */}
    </NativeBaseProvider>
  );
}

