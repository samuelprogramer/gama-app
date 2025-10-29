
import React from "react";
import {useTheme, VStack, Box, View, IconButton, Image, Text, ScrollView, HStack} from "native-base";
import {TextInput, Alert} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {ArrowLeft, TextT} from 'phosphor-react-native';
import { ButtonText } from "../../../components/ButtonText";

import { DadosEscolasMapa } from "../../../services/DadosEscolasMapa";
import { useEffect, useState } from "react";

import { TextInputMask } from 'react-native-masked-text'

import { DadosUser } from "../../../services/DadosUser";
import { Premiacao } from "../../../services/Premiacao";
import ApiLogin from "../../../api/ApiLogin";

export function Sorteio(){
    const navigation = useNavigation();
    const dadosUser = new DadosUser();
    const premiacao_dados = new Premiacao();
    var apilogin = new ApiLogin();


    // Voltando
    function handleBakc(){
        navigation.goBack();
    }

    async function handleMatricularse(){
        try{
            handleMatriculese();
        }catch(e){
            console.log("OK deu ruim aqui: "+e);
            Alert.alert('Erro', 'Ocorreu um erro ao Cadastrar-se no sorteio');
        }
        
    }

    const {colors} = useTheme();
    const img = dadosUser.getLogoext();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [code, setCode] = useState("00000");

    const [editableinput, setEditableInput] = useState(true);
    

    function verificarPremiacao(){
        try{
            setNome(dadosUser.getNome());
            setEmail(dadosUser.getEmail());
            setTelefone(dadosUser.getTelefone());
        }catch(e){

        }
        try{
            console.log(premiacao_dados.haveAwards());
            if(premiacao_dados.haveAwards()){
                console.log("Setando");
                const json_awords = premiacao_dados.getAwards();
                console.log(json_awords);
                setCode(json_awords.code);
                setNome(json_awords.nome);
                setEmail(json_awords.email);
                setTelefone(json_awords.telefone);
                setEditableInput(false);
    
            }
        }catch(e){

        }
        

    }

    useEffect(()=>{
        verificarPremiacao();
    },[]);
    


    /**
     * Enviando dados de cadastro para server
     */
    async function handleMatriculese(){


        
        const dados = {
            nome:nome,
            email:email,
            telefone:telefone,
            nome_auto_escola: dadosUser.getEscola(),
            id_user: dadosUser.getIduser()
        };
        const json = JSON.stringify(dados);
        console.log(json);
        await fetch(
            "http://starts.sytes.net:4000/cfclegal",
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

                const premio = {
                    nome:nome,
                    email:email,
                    telefone:telefone,
                    nome_auto_escola: dadosUser.getEscola(),
                    id_user: dadosUser.getIduser(),
                    code: result
                };
                console.log(result);
                premiacao_dados.setPremiacao(premio);
                Alert.alert('Sucesso', 'Cadastrado com sucesso...');
                setEditableInput(false);
                setCode(result);
                //navigation.goBack();
                
            })
            .catch((error) => {
                Alert.alert('Erro', 'Ocorreu um erro ao Cadastrar-se no sorteio');
                console.log(error);
            });

        
    }

    return (
        <VStack flex={1} bg="primary.600">
            <ScrollView>
                <View pt={10}>
                    <HStack alignItems={"center"}>
                        <View alignItems={"flex-start"} >
                            <IconButton
                                icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                                onPress={handleBakc} 
                            /> 
                        </View>
                        <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Premiação</Text>
                        
                    </HStack>
                </View>
                <View alignItems="center">
                    <Box w={"80%"} marginBottom={100} pt={10}>
                        <View p={60} w="full" h={255} alignItems="center">
                                <Image
                                w={"full"}
                                h={"full"}
                                alt=" " 
                                source={{uri: img}}/>
                        </View>
                        {editableinput?
                            <View>
                                <Text color={"#909090"} >Realize seu cadastro para participar da premiação</Text>
                                <Text color={"#909090"} >Cadastro até dia 31/01/2023</Text>
                            </View>
                            :
                            <View>
                                <Text color={"#909090"} >Meu Cadastro</Text>      
                            </View>
                        }
                    
                        
                        <TextInput
                            style={{
                                height: 40,
                                margin: 12,
                                borderWidth: 1,
                                padding: 10,
                            }}
                            placeholder="Nome"
                            keyboardType="default"
                            onChangeText={setNome}
                            editable={editableinput}
                        />

                        <TextInput
                            style={{
                                height: 40,
                                margin: 12,
                                borderWidth: 1,
                                padding: 10,
                            }}
                            placeholder="Email"
                            keyboardType="default"
                            onChangeText={setEmail}
                            editable={editableinput}
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
                                    onChangeText={(setTelefone)}
                                >{telefone}</TextInputMask>
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
                                    onChangeText={(setTelefone)}
                                />
                            }
                        
                        

                        {editableinput?
                            <HStack>
                                <Box w={"100%"} alignItems={"flex-end"}>
                                    <ButtonText title="Cadastrar-me para a premiação" onPress={handleMatricularse}></ButtonText>
                                </Box>
                            </HStack>
                            :
                            <View  alignItems={"center"}>
                                <Text>Meu numero para premmiação</Text>
                                <Text color={"primary.700"} fontSize={18}>{code}</Text>
                            </View>
                        }

                    </Box>
                </View>
            </ScrollView>
        </VStack>
    );

}