import { HStack, Box,Text, VStack, Image, 
    View, ScrollView, useTheme, IconButton} from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
// Icones para os cards
import { User, HouseLine, MapPinLine, 
    ListChecks, Files, File, Users, PhoneCall, Car, QrCode, ArrowLeft, ListDashes, Handshake, FileDoc, AddressBook, WhatsappLogo, GraduationCap, Student} from 'phosphor-react-native';
import { ButtonText } from "../../../components/ButtonText";
import { Linking, Platform } from "react-native";

export function MatriculaOnline(){
    const navigation = useNavigation();
    const {colors} = useTheme();
    function handleBakc(){
        navigation.goBack();
    }
    function openStor(){
        var link = Platform.OS === 'ios' ? 'https://apps.apple.com/br/app/onboarding-digital/id1512014546' : 'https://play.google.com/store/apps/details?id=com.vsoft.certfyremote&hl=pt_BR';
        Linking.openURL(link);
    }

    return(
        <VStack>
            <HStack pt={10} alignItems={"center"}>
                <View alignItems={"flex-start"} >
                    <IconButton
                        icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                        onPress={handleBakc} 
                    /> 
                </View>
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Matricula Online</Text>
            </HStack>

            <View padding={10}>
                <Text color={"primary.700"} fontSize={18}>Como me matricular?</Text>
                <Text color={"primary.700"} fontSize={14}>A Matricula e outros serviços são realizadados pelo app Onboarding Digital</Text>
                
              
                <Text color={"primary.700"} fontSize={14}>Baixe o app e realize sua matricula!</Text>
                
                <ButtonText marginTop={10} title="Ir para a loja" onPress={openStor}/>

            </View>
            
            
        </VStack>
    );
}
