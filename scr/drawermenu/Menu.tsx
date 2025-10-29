
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

import React from "react";
import { HomeInterna } from "../screens/areainterna/HomeInterna";
import { ConteudoVip } from "../screens/areainterna/ConteudoVip/ConteudoVip";
import { HomeAgendamentos } from "../screens/areainterna/agendamentos/HomeAgendamentos";
import { MinhaConta } from "../screens/areainterna/MinhaConta";
import { MinhasAulas } from "../screens/areainterna/minhasaulas/MinhasAulas";
import { PacoteDeServico } from "../screens/areainterna/pacoteservico/PacoteDeServicos";
import { ContatoEscola } from "../screens/escolas/ContatoEscola";

export default function Menu(){

    const Drawer = createDrawerNavigator();

    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="App">
                <Drawer.Screen name="Página Inicial" component={HomeInterna}/>
                <Drawer.Screen name="Conteúdo VIP" component={ConteudoVip}/>
                <Drawer.Screen name="Agendar Aulas" component={HomeAgendamentos}/>
                <Drawer.Screen name="Minha Conta" component={MinhaConta}/>
                <Drawer.Screen name="Minhas Aulas" component={MinhasAulas}/>
                <Drawer.Screen name="Pacote de serviços" component={PacoteDeServico}/>
                <Drawer.Screen name="Contato" component={ContatoEscola}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}