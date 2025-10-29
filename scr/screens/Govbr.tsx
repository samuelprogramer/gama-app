import { HStack, Box,Text, VStack, Image, 
    View, ScrollView, useTheme, IconButton} from "native-base";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

// Icones para os cards
import { User, HouseLine, Users, PhoneCall, Car, QrCode, Globe, ArrowLeft, UserList} from 'phosphor-react-native';

import { CardHome } from "../components/CardHome";
import { Linking, Platform } from "react-native";




// cfclegal.autoescoladigitals.com.br
// br.com.autoescolafigitals.cfclegal

export function GovBr(){
    const navigation = useNavigation();
    

    
    /**
     * Nevegação para telas dos cards exibidos na tela
     * pegamos o id passado pelo card pre configurado anteriormente
     * 
     * @param card_id 
     */
    function handleCard(){
        if (Platform.OS === 'android') {
            Linking.openURL("https://play.google.com/store/apps/details?id=br.gov.meugovbr&hl=pt_BR&gl=US");
        }else{
            Linking.openURL("https://apps.apple.com/br/app/gov-br/id1506827551");
        }
        
        //
    }
    function handleBakc(){
        navigation.goBack();
    }
   

    const {colors} = useTheme();
    const img = require('../assets/govbr.png');
    const imgaedigitals = require('../assets/logoaedigitals.png');
    return(
        <VStack  paddingTop={10}  flex={1} bg="primary.600">
           
           <HStack alignContent={"center"} alignItems={"center"} >
                <IconButton
                    icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                    onPress={handleBakc} 
                />
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22} >GOV</Text>
            </HStack>
            
            <View padding={20} w="full" alignItems="center">
                <Image  resizeMode="contain" alt="logocfclegal" source={img}/>
            </View>
            
            <VStack alignItems="center">
                
            <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={12} >Clique no botão a baixo para baixar o aplicativo gov.br</Text>
                <CardHome title="Baixar GOV.br" icon={Globe} 
                                    onPress={() => handleCard()}  />
            </VStack>
            
            
        </VStack>
    );
}