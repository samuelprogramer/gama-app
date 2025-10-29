import {Box, VStack, Image, 
    View, ScrollView, useTheme, Text, IconButton} from "native-base";
import {TextInput} from "react-native";
import {ArrowLeft} from 'phosphor-react-native';
import { useNavigation } from "@react-navigation/native";
import { ButtonText } from "../components/ButtonText";
import { useState } from "react";

const img = require('../assets/logocfclegal.jpeg');


export function SolicitarSenha(){
    const navigation = useNavigation();
    const {colors} = useTheme();
    const [login, setLogin] = useState('');
    // Voltando
    function handleBack(){
        navigation.goBack()
    }

    /**
     * Enviando  comando para nova senha
     */
    function handleNewPassword(){
        console.log("requisitando senha: "+login)

    }

    return(
        <VStack flex={1} bg="primary.600">
            <ScrollView>
                <Box marginBottom={100} pt={10}>
                    <View h={1} alignItems={"flex-start"} p={2}>
                        <IconButton
                            icon={<ArrowLeft color={colors.primary[700]} size={30}/>} onPress={handleBack}
                        /> 
                    </View>

                    <View alignItems="center">                        
                        <Box w={"80%"}>
                            <View w="full" h={255} alignItems="center">
                                <Image w={255} h={255} alt="logocfclegal" source={img}/>
                            </View>

                            <TextInput
                            style={{
                                height: 40,
                                margin: 12,
                                borderWidth: 1,
                                borderColor: colors.primary[700],
                                padding: 10,
                            }}
                            onChangeText={(text) => setLogin(text)}
                            placeholder="Digite seu login"
                            keyboardType="default"
                            />

                            <Box alignItems={"flex-end"}>
                                <ButtonText title="Solicitar nova senha" onPress={handleNewPassword}>

                                </ButtonText>
                            
                            </Box>
                        </Box>
                    </View>
                </Box>
            </ScrollView>
        </VStack>
    );
}