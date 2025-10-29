import {useTheme, VStack, Box, View, IconButton, Image, Text, ScrollView, HStack, Input} from "native-base";
import {TextInput, Alert, Linking} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {ArrowLeft, TextT} from 'phosphor-react-native';
import { ButtonText } from "../../components/ButtonText";

import { DadosEscolasMapa } from "../../services/DadosEscolasMapa";
import { useEffect, useState } from "react";

import React from "react";
import { DadosUser } from "../../services/DadosUser";
import { Parceiros } from "../../api/Parceiros";
import { TextInputMask } from "react-native-masked-text";

export function SolicitarLADV(){

    var parceiros = new Parceiros();

    const navigation = useNavigation();
    const {colors} = useTheme();
    const dadosUser = new DadosUser();
    const img = dadosUser.getLogoext();

    const [nome, setNome] = useState(dadosUser.getNome());
    const [data, setData] = useState("");
    const [numWTS, setNumWTS] = useState(0);
    async function getPar(){
        await parceiros.getParceiros();
        var cfc = parceiros.findCfcNameCFC(dadosUser.getEscola());

        setNumWTS(cfc.whatsapp);
    }
    
    function handleBakc(){
        navigation.goBack();
    }


    
    async function handleSolicitar(){
        
        Linking.openURL(`whatsapp://send?phone=+55${numWTS}&text=${'Olá, fui aprovado no exame prático, e gostaria de solicitar minha LADV Nome:'+nome+", Data da minha prova:"+data}`);
    }

    useEffect(()=>{
        getPar();
    });

    return(
        <View flex={1} bg="primary.600" paddingTop={10} paddingLeft={5}>
            <ScrollView>
                <HStack alignContent={"center"} alignItems={"center"} >
                    <IconButton
                        icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                        onPress={handleBakc} 
                    />
                    <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22} >Solicitar LADV</Text>
                </HStack>
                <View alignItems="center">
                    <Box w={"80%"} marginBottom={100} pt={10}>
                        <View p={60} w="full" h={255} alignItems="center">
                                <Image
                                w={"full"}
                                h={"full"}
                                alt=" " 
                                source={{uri: img}}/>
                        </View>
                    
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
                            />

                        <TextInput
                            style={{
                                height: 40,
                                margin: 12,
                                borderWidth: 1,
                                padding: 10,
                            }}
                            placeholder="Data"
                            onChangeText={setData}
                            />
                        <HStack>
                            <Box w={"100%"} alignItems={"flex-end"}>
                                <ButtonText title="Solicitar" onPress={handleSolicitar}></ButtonText>
                            </Box>
                        </HStack>

                    </Box>
                </View>
            </ScrollView>             
            
            
        </View>
        
    );

}

