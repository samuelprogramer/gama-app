import { HStack, Box,Text, VStack, Image, 
    View, ScrollView, useTheme, IconButton} from "native-base";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

// Icones para os cards
import { User, HouseLine, Users, PhoneCall, Car, QrCode, Globe, ArrowLeft, UserList} from 'phosphor-react-native';

import { CardHome } from "../components/CardHome";
import { Linking } from "react-native";
import { ButtonText } from "../components/ButtonText";


// cfclegal.autoescoladigitals.com.br
// br.com.autoescolafigitals.cfclegal

export function CartaodoEmpresario(){
    const navigation = useNavigation();
    

    
    /**
     * Nevegação para telas dos cards exibidos na tela
     * pegamos o id passado pelo card pre configurado anteriormente
     * 
     * @param card_id 
     */
    function handleCard(card_id: int){
        var url = "";
        switch(card_id){
            case 1:
                url = "https://www.cartaodoempresario.com.br/Carrinho/Cadastro/Empresario";
            break;
        }
        if(url!=""){
            Linking.openURL(url);
        }
    }
    function handleBakc(){
        navigation.goBack();
    }
   

    const {colors} = useTheme();
    const img = require('../assets/logocfclegal.jpeg');
    const imgaedigitals = require('../assets/logoaedigitals.png');
    return(
        <VStack  paddingTop={10}  flex={1} bg="primary.600">
           
           <HStack alignContent={"center"} alignItems={"center"} >
                <IconButton
                    icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                    onPress={handleBakc} 
                />
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22} >Cartão do Empresario</Text>
            </HStack>
            
            <View w="full" alignItems="center">
                <Image w={170} h={170} alt="logocfclegal" source={img}/>
            </View>
            
            <VStack alignItems="center" padding={10}>
                <Text textAlign={"justify"}>O Cartão do Empresário é um produto da Fecomércio-PE que oferece benefícios exclusivos do Sistema 
                    Fecomércio/Sesc/Senac e seus parceiros.</Text>
                <Text textAlign={"justify"} marginTop={5}>
                Pagando uma anuidade de R$ 180,00 
                    você entra no nosso clube de vantagens e tem acesso a descontos especiais em vários produtos e serviços.
                </Text>
            </VStack>
            <View w="full" alignItems="center">
                <ButtonText onPress={()=>{handleCard(1)}} title={"Continuar"}></ButtonText>
            </View>
            
        </VStack>
    );
}