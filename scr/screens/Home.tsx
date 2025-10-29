import {
    HStack, Box, Text, VStack, Image,
    View, ScrollView, useTheme, IconButton
} from "native-base";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

// Icones para os cards
import { User, HouseLine, Users, PhoneCall, Car, QrCode, Globe } from 'phosphor-react-native';

import { Location } from "../services/Location";

import { DadosUser } from "../services/DadosUser";
import { CardHome } from "../components/CardHome";
import React from "react";




// cfclegal.autoescoladigitals.com.br
// br.com.autoescolafigitals.cfclegal

export function Home() {
    const navigation = useNavigation();
    var location = new Location();

    if (DadosUser.LOGADO == undefined) {
        DadosUser.LOGADO = false;
    }
    const [showElement] = useState(DadosUser.LOGADO)
    console.log(DadosUser.LOGADO)

    // Navegar para a tela de login
    function handleSingIn() {
        console.log("handleSingIn");
        navigation.navigate('login');
    }
    const card = {
        escolas: 'mapescolas',
        clinicas: 'clinicas',
        vistorias: 'vistorias',
        cfcs: 'cfcs',
        login: 'login',
        despachantes: 'despachantes',
        assessoria: 'assessoria',
        contato: 'contato',
        fecomercio: 'fecomercio'
    };
    /**
     * Nevegação para telas dos cards exibidos na tela
     * pegamos o id passado pelo card pre configurado anteriormente
     * 
     * @param card_id 
     */
    function handleCard(card_id: string) {
        navigation.navigate(card_id);
    }
    useEffect(() => {
        // perguntas de permiçoes logo ao iniciar o app
        location.setPermitionLocation()
    }, [])

    // Pegar a localidade atual para evitar esperas nas próximas telas
    location.getGetLocationNaw();

    function govbrOpen() {
        navigation.navigate("govbr");

    }

    const { colors } = useTheme();
    const img = require('../assets/logocfclegal.jpeg');
    const imgaedigitals = require('../assets/logoaedigitals.png');
    return (
        <VStack flex={1} bg="primary.600">

            <View flexDirection="row-reverse" pt={10}>
                {!showElement ? <IconButton
                    onPress={handleSingIn}
                    icon={<User color={colors.primary[700]} size={30} />}
                /> : null}
                {/* {checkLogin()}    */}
            </View>

            <View w="full" alignItems="center" paddingBottom={10}>
                <Image w={120} h={120} alt="logocfclegal" source={img} />
            </View>
            <ScrollView>
                <VStack alignItems="center">
                    <CardHome title="Auto Escolas" icon={HouseLine}
                        onPress={() => handleCard(card.escolas.toString())} />

                    <CardHome title="Área do aluno" icon={Users}
                        onPress={() => handleCard(card.login.toString())} />




                </VStack>

            </ScrollView>
        </VStack>
    );
}