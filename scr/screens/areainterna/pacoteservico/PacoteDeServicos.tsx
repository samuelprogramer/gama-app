import { HStack, Box,Text, VStack, Image, 
    View, ScrollView, useTheme, IconButton} from "native-base";
import { useNavigation } from "@react-navigation/native";

import { Card } from "../../../components/Card";

import { User, HouseLine, MapPinLine, 
    ListChecks, Files, Users, PhoneCall, Car, QrCode, ArrowLeft} from 'phosphor-react-native';

import { DadosUser } from "../../../services/DadosUser";


export function PacoteDeServico(){

    const navigation = useNavigation(); 


    const dadosUser = new DadosUser();
    const {colors} = useTheme();
    
    // Carregar imagen da escola
    const img = dadosUser.getLogoext();

    const card = {
        remarcTeorica: 'teorica',
        remarcPatrica: 'pratica',
        extras: 'extras',
        emissaocnh: 'cnh'
    };

    function handleCard(idcard){

    }

    function handleBakc(){
        navigation.goBack();
    }

    return(
        <VStack flex={1} bg="primary.600">
            <Box>      
                <HStack alignContent={"center"} padding={10} alignItems={"center"} >
                    <IconButton
                        icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                        onPress={handleBakc} 
                    />
                </HStack>     
                <View p={60} w="full" h={255} alignItems="center">
                    <Image
                    w={"full"}
                    h={"full"}
                    alt="logocfclegal" 
                    source={{uri: img}}/>
                </View>
            </Box>   
            <ScrollView mx={5} showsVerticalScrollIndicator={false}>

                
                <HStack w="full" justifyContent="center">
                    <View  flexDirection="column">
                        {/*Masterial de estudo*/}
                        <Card title="Remarcação Teórica" icon={HouseLine} 
                            onPress={() => handleCard(card.remarcTeorica.toString())}  />
                        {/*Contato*/}
                        <Card title="Aulas Extras" icon={MapPinLine} 
                            onPress={() => handleCard(card.extras.toString())} />
                        
                    </View>

                    <View flexDirection="column" >
                        {/*Servicos*/}
                        <Card title="Remarcação Prática" icon={Files} 
                            onPress={() => handleCard(card.remarcPatrica.toString())}  />
                        {/*Login*/}
                        <Card title="Emissão CNH" icon={Users}
                            onPress={() => handleCard(card.emissaocnh.toString())}  />
                    </View>
                </HStack>
                
                
            </ScrollView>
            
        </VStack>
    );
    
}

