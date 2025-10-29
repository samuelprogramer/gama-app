import { useTheme, VStack, Box, View, IconButton, Image, Text, ScrollView, HStack } from "native-base";
import { TextInput, Alert, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft, TextT } from 'phosphor-react-native';
import { ButtonText } from "../../components/ButtonText";

import { useEffect, useState } from "react";

import React from "react";
import { DadosEscolasMapa } from "../../services/DadosEscolasMapa";
import { Parceiros } from "../../api/Parceiros";

import { DadosUser } from "../../services/DadosUser";
import ApiLogin from "../../api/ApiLogin";

export function LoginEscola() {
    const navigation = useNavigation();

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const apiLogin = new ApiLogin();
    const dadosUser = new DadosUser();

    const [NumberWts, setNumberWts] = useState("");

    var dadosEsola = new DadosEscolasMapa();
    var parceiros = new Parceiros();

    // Voltando
    function handleBakc() {
        navigation.goBack();
    }

    function handleSolicitarSenha() {
        navigation.navigate('soliticarsenha');
    }
    /**
     * Logando na plataforma
     * os dados de senha e email chegam aqui por meio das atualizações
     * em onChangeText em cada Input
     */

    async function handleLogin() {
        console.log('Em desenvolvimento: ' + login + ' ' + senha);
        var checkLogin = await apiLogin.signin(login, senha);
        console.log(checkLogin)

        if (checkLogin) {
            if (dadosUser.getLogado() == true) {
                console.log('Acesso: ' + dadosUser.getAcesso());
                if (dadosUser.getAcesso() == 0) {
                    //não aceitou os termos
                    navigation.navigate('contrato');
                } else {
                    navigation.navigate('homeinterna');
                }
            }
        } else {
            Alert.alert(
                "Login inválido",
                "Verifique se os dados estão corretos ou tente mais tarde",
                [
                    {
                        text: "Tentar novamente",
                        style: "cancel"
                    }
                ]
            );
        }
    }

    const msgwts = "Olá achei vocês atraves do aplicativo cfc legal, gostaria de me cadastrar";


    function NaoSouAluno() {
        Linking.openURL(`whatsapp://send?phone=+55${NumberWts}&text=${msgwts}`);
    }

    async function PegarContato() {
        await parceiros.getParceiros();
        var cfcencontrada = parceiros.findCfcId(dadosEsola.getMarkToUse().id);
        setNumberWts(cfcencontrada.whatsapp);
    }
    useEffect(() => {
        PegarContato();
    }, []);

    const { colors } = useTheme();
    const img = require('../../assets/logocfclegal.jpeg');

    return (
        <VStack flex={1} bg="primary.600">
            <ScrollView>
                <View pt={10}>
                    <View h={1} alignItems={"flex-start"} p={2}>
                        <IconButton
                            icon={<ArrowLeft color={colors.primary[700]} size={30} />}
                            onPress={handleBakc}
                        />
                    </View>
                </View>
                <View alignItems="center">
                    <Box w={"80%"} marginBottom={100} pt={10}>


                        <View w="full" h={255} alignItems="center">
                            <Image w={255} h={255} alt=" " source={img} />
                        </View>

                        <TextInput
                            style={{
                                height: 40,
                                margin: 12,
                                borderWidth: 1,
                                padding: 10,
                            }}
                            placeholder="Login"
                            keyboardType="default"
                            onChangeText={(text) => setLogin(text)}
                        />

                        <TextInput
                            style={{
                                height: 40,
                                margin: 12,
                                borderWidth: 1,
                                padding: 10,
                            }}
                            secureTextEntry
                            placeholder="Senha"
                            keyboardType="default"
                            onChangeText={(pass) => setSenha(pass)}
                        />

                        <HStack>
                            <Box w={"50%"} alignItems={"flex-start"}>
                                <ButtonText title="Entrar" onPress={handleLogin}></ButtonText>
                            </Box>
                            <Box w={"50%"} alignItems={"flex-end"}>
                                <ButtonText title="Solicitar nova senha" onPress={handleSolicitarSenha}></ButtonText>
                            </Box>
                        </HStack>

                        <ButtonText title="Não sou aluno" onPress={NaoSouAluno} marginTop={10}></ButtonText>

                    </Box>
                </View>
            </ScrollView>
        </VStack>
    );

}