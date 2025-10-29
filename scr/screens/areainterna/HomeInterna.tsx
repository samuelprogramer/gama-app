import {
    HStack, Box, Text, VStack, Image,
    View, ScrollView, useTheme, IconButton
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Card } from "../../components/Card";

import {
    User, HouseLine, MapPinLine,
    ListChecks, Files, Users, PhoneCall, Car, QrCode, ArrowLeft, CarSimple, Trophy, FirstAid
} from 'phosphor-react-native';

import { DadosUser } from "../../services/DadosUser";

import Menu from "../../drawermenu/Menu";
import React from "react";
import ApiLogin from "../../api/ApiLogin";
import { Alert } from "react-native";

export function HomeInterna() {
    const navigation = useNavigation();
    const dadosUser = new DadosUser();
    const img = dadosUser.getLogoext();
    const apilogin = new ApiLogin();

    function handleCard(id_card) {
        navigation.navigate(id_card);
    }
    function sairdaconta() {
        Alert.alert(
            "Sair da conta?",
            "Gostaria realmente de sair da conta?",
            [
                {
                    text: "Sim",
                    onPress: () => {
                        apilogin.logOut();
                        navigation.goBack();
                    },
                    style: "cancel"
                },
                { text: "nao", onPress: () => console.log("OK Pressed") }
            ]
        );
        apilogin.logOut();
    }

    const card = {
        conteudovip: 'conteudovip',
        minhaconta: 'minhaconta',
        pacotedeservicos: 'pacotedeservicos',
        agendaraulas: 'homeagendamentos',
        minhasaulas: 'minhasaulas',
        contato: 'contato',
        sorteio: 'sorteio',
        marcarexame: 'marcarexame',
        solicitarladv: 'solicitarladv'
    };

    return (
        <VStack flex={1} bg="primary.600">
            <Box>
                <View p={60} w="full" h={255} alignItems="center">
                    <Image
                        w={"full"}
                        h={"full"}
                        alt="logocfclegal"
                        source={{ uri: img }} />
                </View>
            </Box>
            <ScrollView mx={5} showsVerticalScrollIndicator={false}>

                <HStack w="full" justifyContent="center">
                    <View flexDirection="column">
                        <Card title="Agendar Aulas" icon={Files}
                            onPress={() => handleCard(card.agendaraulas.toString())} />
                        <Card title="Minha Conta" icon={User}
                            onPress={() => handleCard(card.minhaconta.toString())} />
                        {/*<Card title="Premiação" icon={Trophy} 
                                    onPress={() => handleCard(card.sorteio.toString())}  />*/}
                        {/*Masterial de estudo*/}
                        {/*<Card title="Aulas teoricas em video" icon={HouseLine}
                            onPress={() => handleCard(card.conteudovip.toString())} />
                        {/*Contato
                        <Card title="Solicitar LADV" icon={CarSimple}
                            onPress={() => handleCard(card.solicitarladv.toString())} />
                        */}
                        {/*Matricule-se*/}


                    </View>

                    <View flexDirection="column" >
                        {/*<Card title="Curso Teórico Online" icon={FirstAid}
                                    onPress={() => handleCard(7)}  />*/}
                        {/*Servicos
                        <Card title="Marcação de Exames" icon={ListChecks}
                            onPress={() => handleCard(card.marcarexame.toString())}
                        />*/}


                        {/*Login*/}
                        <Card title="Minhas Aulas" icon={Users}
                            onPress={() => handleCard(card.minhasaulas.toString())} />
                        {/*Parceiros*/}

                        {/*Parceiros*/}
                        <Card title="Sair da Conta" icon={User}
                            onPress={() => sairdaconta()} />
                    </View>
                </HStack>


            </ScrollView>

        </VStack>
    );

}



