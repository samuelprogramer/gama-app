import {useTheme, VStack, Box, View, IconButton, Image, Text, ScrollView, HStack, KeyboardAvoidingView} from "native-base";
import {TextInput, Alert, Platform} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {ArrowLeft, TextT} from 'phosphor-react-native';
import { ButtonText } from "../../components/ButtonText";

import { DadosEscolasMapa } from "../../services/DadosEscolasMapa";
import { useState } from "react";

import React from "react";
import { DadosUser } from "../../services/DadosUser";

import { TextInputMask } from 'react-native-masked-text'

export function Matriculese(){

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");
    const [telefone, setTelefon] = useState("");
    const [cpf, setCpf] = useState("");
    const [datanascimento, setDataNascimento] = useState("");
    

    const navigation = useNavigation();
    var dadosEsola = new DadosEscolasMapa();
    var dadosUser = new DadosUser();

    // Voltando
    function handleBakc(){
        navigation.goBack();
    }

    async function handleMatricularse(){
        try{
            handleMatriculese();
        }catch(e){
            console.log("OK deu ruim aqui: "+e);
        }
        
    }

    const {colors} = useTheme();
    const img = dadosEsola.getMarkToUse().logo;


    async function handleMatriculese(){


        /**
         * Para cadastrar um usuario em uma CFC para matricula temos que ter o numero de inscrição 
         * correto, no caso testamos com ID 0, que nao funciona, esta funcionando com id 1
         * que acho que seria de teste
         */
        
        const dados = {
            nomeAluno: nome,
            email: email,
            telefone: celular,
            ddd: "00",
            cpf: cpf,
            nascimento: datanascimento,
            local: "BA",
            itemId: dadosEsola.getMarkToUse().id,
            logo: dadosEsola.getMarkToUse().logo,
            logoExt: dadosEsola.getMarkToUse().logo,
            nomeParams: "params",
            nomepai: "",
            nomemae: "",
            rua: "",
            numero: "",
            cep: "",
            cidade: "",
            estado: "",
            numHab: "",
            venceHab: "",
            dtPrimHab: "",
            rg: "",
            indicacao: "1",// id da CFC

        };

        

        const json = JSON.stringify(dados);
        console.log(json);
        await fetch(
            "https://cfclegal.autoescoladigitals.com.br/webservice/post/email/include/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                Alert.alert('Sucesso', 'Sua Inscrição foi realizada');
                navigation.goBack();
            })
            .catch((error) => {
                console.log(error);
            });

        
    }

    return (
        <ScrollView  flex={1} bg="primary.600">
            <View pt={10}>
                <View h={1} alignItems={"flex-start"} p={2}>
                    <IconButton
                        icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                        onPress={handleBakc} 
                    /> 
                </View>
            </View>
            <View alignItems="center">
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                    <Box w={"80%"} marginBottom={100} pt={10}>
                        <View p={60} w="full" h={255} alignItems="center">
                                <Image
                                w={"full"}
                                h={"full"}
                                alt=" " 
                                source={{uri: img}}/>
                        </View>
                        <Text color={"#909090"} >Faça sua reserva. Nossa equipe entrará em contato com você.</Text>
                        <TextInput
                        style={{
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                        onChangeText={setNome}
                        placeholder="Nome"
                        keyboardType="default"
                        />

                        <TextInput
                            style={{
                                height: 40,
                                margin: 12,
                                borderWidth: 1,
                                padding: 10,
                            }}

                            onChangeText={setEmail}
                            placeholder="Email"
                            keyboardType="email-address"
                        />

                        {Platform.OS === 'ios'?
                            <TextInputMask
                                style={{
                                    height: 40,
                                    margin: 12,
                                    borderWidth: 1,
                                    padding: 10,
                                }}
                                type={'cel-phone'}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99) '
                                }}
                                placeholder="Celular"
                                onChangeText={(setCelular)}
                            >{celular}</TextInputMask>
                            :
                            <TextInputMask
                            style={{
                                height: 40,
                                margin: 12,
                                borderWidth: 1,
                                padding: 10,
                            }}
                            type={'cel-phone'}
                            options={{
                                maskType: 'BRL',
                                withDDD: true,
                                dddMask: '(99) '
                            }}
                            placeholder="Celular"
                            onChangeText={(setCelular)}
                            />
                        }
                        {Platform.OS === 'ios'?
                            <TextInputMask
                                style={{
                                    height: 40,
                                    margin: 12,
                                    borderWidth: 1,
                                    padding: 10,
                                }}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: false,
                                    dddMask: '(99) '
                                }}
                                type={'cel-phone'}
                                onChangeText={setTelefon}
                                placeholder="Telefone"
                            >{telefone}</TextInputMask>
                            :
                            <TextInputMask
                                style={{
                                    height: 40,
                                    margin: 12,
                                    borderWidth: 1,
                                    padding: 10,
                                }}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: false,
                                    dddMask: '(99) '
                                }}
                                type={'cel-phone'}
                                onChangeText={setTelefon}
                                placeholder="Telefone"
                            />
                        }
                        {Platform.OS === 'ios'?
                            <TextInputMask
                                type={'cpf'}
                                style={{
                                    height: 40,
                                    margin: 12,
                                    borderWidth: 1,
                                    padding: 10,
                                }}
                                onChangeText={setCpf}
                                placeholder="CPF - somente números"
                            >{cpf}</TextInputMask>
                        :
                            <TextInputMask
                                type={'cpf'}
                                style={{
                                    height: 40,
                                    margin: 12,
                                    borderWidth: 1,
                                    padding: 10,
                                }}
                                onChangeText={setCpf}
                                placeholder="CPF - somente números"
                            />
                        }

                        {Platform.OS === 'ios'?
                            <TextInputMask
                                type={'datetime'}
                                options={{
                                format: 'DD/MM/YYYY'
                                }}
                                style={{
                                    height: 40,
                                    margin: 12,
                                    borderWidth: 1,
                                    padding: 10,
                                }}
                                placeholder="Data de Nascimento"
                                onChangeText={setDataNascimento}
                            >{datanascimento}</TextInputMask>
                            :
                            <TextInputMask
                                type={'datetime'}
                                options={{
                                format: 'DD/MM/YYYY'
                                }}
                                style={{
                                    height: 40,
                                    margin: 12,
                                    borderWidth: 1,
                                    padding: 10,
                                }}
                                placeholder="Data de Nascimento"
                                onChangeText={setDataNascimento}
                            />
                        }

                        <HStack>
                            <Box w={"100%"} alignItems={"flex-end"}>
                                <ButtonText title="Entrar" onPress={handleMatricularse}></ButtonText>
                            </Box>
                        </HStack>

                    </Box>
                </KeyboardAvoidingView>
            </View>
        </ScrollView>
    );

}