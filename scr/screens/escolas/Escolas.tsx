import {
    HStack, Box, Text, VStack, Image,
    View, ScrollView, useTheme, IconButton
} from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Loading } from '../../components/Loading';

// Icones para os cards
import {
    User, HouseLine, MapPinLine,
    ListChecks, Files, File, Users, PhoneCall, Car, QrCode, ArrowLeft, ListDashes, Handshake, FileDoc, AddressBook, WhatsappLogo, GraduationCap, Student
} from 'phosphor-react-native';

import { Card } from "../../components/Card";
import { DadosEscolasMapa } from "../../services/DadosEscolasMapa";
import { Linking, Platform } from "react-native";
import { DadosNavegacaoEscola } from "../../services/DadosNavegacaoEscola";
import { ButtonText } from "../../components/ButtonText";


export function Escolas() {
    var dadosNavegacao = new DadosNavegacaoEscola();
    const navigation = useNavigation();
    const { colors } = useTheme();
    const route = useRoute();// Recuperando informações da rota para pegar dados
    const [isLoading, setIsLoading] = useState(true);
    var dadosEsola = new DadosEscolasMapa();
    const [servicesView, setServicesView] = useState(false);

    const escolaId = route.params;

    const card = {

        homematerial: 'homematerial',
        servicos: 'homeservicos',
        contato: 'contatoescolas',
        login: 'loginescola',
        matriculese: 'matriculese',
        parceiros: 'parceiros',
        matriculaonline: 'matriculaonline'

    };

    function getDadosEscola() {
        var cfc = dadosEsola.getMarksMap(escolaId);
        dadosEsola.setMarkToUse(cfc);
        setIsLoading(false);
    }


    useEffect(() => {
        getDadosEscola();
    }, []);


    if (isLoading) {
        return <Loading />;
    }

    const img = dadosEsola.getMarkToUse().logo;


    // Voltando
    function handleBakc() {
        navigation.goBack();
    }
    function handleCard(card_id: string) {
        navigation.navigate(card_id);
    }

    function hadleToArrive() {
        console.log(dadosNavegacao.getLatitude());
        openGps();
    }
    function openGps() {
        var scheme = Platform.OS === 'ios' ? 'maps' : 'geo';
        var url = scheme + ':' + dadosNavegacao.getLatitude() + ',' + dadosNavegacao.getLongitude() + '';
        console.log(url);
        openExternalApp(url)
    }

    function openExternalApp(url) {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
                Linking.openURL(url);
            } else {
                console.log('Don\'t know how to open URI: ' + url);
            }
        });
    }
    function handlesetServicesView() {
        setServicesView(!servicesView)
    }
    function handleServicoVeiculo() {
        navigation.navigate('veiculos');
    }
    function handleNaoSouHabilitado() {
        navigation.navigate('naosouhabilitado');
    }
    function handleSouHabilitado() {
        navigation.navigate('souhabilitado');
    }
    return (
        <VStack flex={1} bg="primary.600">
            <ScrollView>
                <HStack pt={10} alignItems={"center"}>
                    <View alignItems={"flex-start"} >
                        <IconButton
                            icon={<ArrowLeft color={colors.primary[700]} size={30} />}
                            onPress={handleBakc}
                        />
                    </View>
                    <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>{dadosEsola.getMarkToUse().nome}</Text>
                </HStack>

                <View marginBottom={5} alignItems="center">
                    <Image
                        w={350}
                        h={150}
                        alt={" "}
                        source={{ uri: img }} />
                </View>

                <HStack w="full" justifyContent="center">
                    <View flexDirection="column">
                        {/*Material de estudo
                        <Card title="Material De Estudo" icon={FileDoc} shadow={2}
                            onPress={() => handleCard(card.homematerial.toString())} 
                        />*/}
                        {/*Contato*/}
                        <Card title="Fale Conosco" icon={WhatsappLogo}
                            onPress={() => handleCard(card.contato.toString())}
                        />

                        {/*Matricule-se
                        <Card title="Matricula Online" icon={GraduationCap}
                            onPress={() => handleCard(card.matriculaonline.toString())}
                        />*/}

                        {/*Matricule-se*/}
                        <Card title="Reserve sua Matricula" icon={Student}
                            onPress={() => handleCard(card.matriculese.toString())}
                        />
                    </View>

                    <View flexDirection="column" >
                        {/*Como Chegar*/}
                        <Card title="Localização" icon={MapPinLine}
                            onPress={() => hadleToArrive()}
                        />
                        {/*Servicos
                        <Card title="Serviços" icon={ListDashes} 
                            onPress={() => handlesetServicesView()}
                        />*/}
                        {/*Login*/}
                        <Card title="Login" icon={Users}
                            onPress={() => handleCard(card.login.toString())}
                        />
                    </View>
                </HStack>
            </ScrollView>
            {servicesView &&
                <View bg={"#FFFC"} w={"100%"} h={"100%"} position="absolute">
                    <VStack borderRadius={10} w={"80%"} bg="primary.600" mt={"40%"} ml={"10%"} alignItems={"center"}
                        shadow="3">
                        <HStack w={"100%"} alignItems={"center"} padding={5}>
                            <View alignItems={"flex-start"} >
                                <IconButton
                                    icon={<ArrowLeft color={colors.primary[700]} size={30} />}
                                    onPress={() => { handlesetServicesView() }}
                                />
                            </View>
                            <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={18} w={"70%"}>Serviços</Text>
                        </HStack>
                        <ButtonText title="Não sou habilitado" w={"80%"} mt={2} onPress={() => { handleNaoSouHabilitado() }}></ButtonText>
                        <ButtonText title="Sou Habilitado" w={"80%"} mt={2} onPress={() => { handleSouHabilitado() }}></ButtonText>
                        <ButtonText title="Veiculos" w={"80%"} mt={2} mb={5} onPress={() => { handleServicoVeiculo() }}></ButtonText>

                    </VStack>
                </View>
            }
        </VStack>
    );
}
