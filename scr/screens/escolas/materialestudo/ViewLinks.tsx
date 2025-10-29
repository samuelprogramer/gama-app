import { useRoute } from '@react-navigation/native';
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

export function ViewLinks(){
    
  const route = useRoute();// Recuperando informações da rota para pegar dados

  const link = route.params;  ''

  return <WebView source={{ uri: link.toString() }} />;

}