import { useTheme, VStack, Box, View, IconButton, Image, Text, ScrollView, HStack, KeyboardAvoidingView, Spinner } from "native-base";
import { TextInput, Alert, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ArrowLeft, TextT } from 'phosphor-react-native';
import { ButtonText } from "../components/ButtonText";
import { useState } from "react";

import { DadosUser } from "../services/DadosUser";

import ApiLogin from "../api/ApiLogin";
import React from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Loading } from "../components/Loading";

export function SingIn() {
    const navigation = useNavigation();
    const apiLogin = new ApiLogin();
    const dadosUser = new DadosUser();
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [loadin_in, setloadin_in] = useState(false);


    function verificarLogado() {
        if (apiLogin.getIsLoged()) {
            console.log("Logado");
            navigation.goBack();
            navigation.navigate('homeinterna');

        } else {
            console.log("User nao logado");
        }
    }
    verificarLogado();

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
        setloadin_in(true);
        console.log('Em desenvolvimento: ' + login + ' ' + senha);
        var checkLogin = await apiLogin.signin(login, senha);
        console.log(checkLogin)

        if (checkLogin) {
            if (dadosUser.getLogado() == true) {
                console.log('Acesso: ' + dadosUser.getAcesso());
                if (dadosUser.getAcesso() == 0) {
                    //não aceitou os termos
                    navigation.goBack();
                    navigation.navigate('contrato');
                } else {
                    navigation.goBack();
                    navigation.navigate('homeinterna');
                }
            }
        } else {
            setloadin_in(false);
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

    function invalidLogin() {
        /**
         * Caso a conta não tenha sido encontrada/erro de digitação 
         */
    }

    const { colors } = useTheme();
    const img = require('../assets/logocfclegal.jpeg');
    if (loadin_in) {
        return (
            <VStack flex={1} bg="primary.600">
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
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
                                    <Image w={155} h={155} alt="logocfclegal" source={img} />
                                </View>

                                <TextInput
                                    style={{
                                        height: 40,
                                        margin: 12,
                                        borderWidth: 1,
                                        padding: 10,
                                    }}
                                    editable={false}
                                    placeholder="Login"
                                    keyboardType="email-address"
                                >{login}</TextInput>

                                <TextInput
                                    style={{
                                        height: 40,
                                        margin: 12,
                                        borderWidth: 1,
                                        padding: 10,
                                    }}
                                    editable={false}
                                    placeholder="Senha"
                                    keyboardType="default"
                                    secureTextEntry
                                >{senha}</TextInput>

                                <HStack marginTop={10}>
                                    <Box w={"100%"} >
                                        <Spinner size={40} color="primary.700"></Spinner>
                                    </Box>

                                </HStack>

                            </Box>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </VStack>
        );
    }

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
                            <Image w={155} h={155} alt="logocfclegal" source={img} />
                        </View>

                        <TextInput
                            style={{
                                height: 40,
                                margin: 12,
                                borderWidth: 1,
                                padding: 10,
                            }}
                            placeholder="Login"
                            keyboardType="email-address"
                            onChangeText={(text) => {
                                if (text != "") {
                                    setLogin(text)
                                }
                            }
                            }
                        >{login}</TextInput>

                        <TextInput
                            style={{
                                height: 40,
                                margin: 12,
                                borderWidth: 1,
                                padding: 10,
                            }}
                            placeholder="Senha"
                            keyboardType="default"
                            secureTextEntry
                            onChangeText={(pass) => setSenha(pass)}
                        >{senha}</TextInput>

                        <HStack>
                            <Box w={"50%"} alignItems={"flex-start"}>
                                <ButtonText title="Entrar" onPress={handleLogin}></ButtonText>
                            </Box>
                            <Box w={"50%"} alignItems={"flex-end"}>
                                <ButtonText title="Solicitar nova senha" onPress={handleSolicitarSenha}></ButtonText>
                            </Box>
                        </HStack>

                    </Box>
                </View>
            </ScrollView>
        </VStack>
    );

}