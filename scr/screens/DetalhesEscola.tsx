
import { HStack, Box,Text, VStack, Image, 
    View, ScrollView, useTheme, IconButton} from "native-base";
import { useNavigation } from "@react-navigation/native";



// Icones para os cards
import { User, HouseLine, MapPinLine, 
    ListChecks, Files, Users, PhoneCall, Car, QrCode, ArrowLeft} from 'phosphor-react-native';

import { Card } from "../components/Card";
import { DadosEscolasMapa } from "../services/DadosEscolasMapa";

export function DetalhesEscola(){
    const navigation = useNavigation();
    const {colors} = useTheme();
    var dadosEsola = new DadosEscolasMapa();
    
    // Voltando
    function handleBakc(){
        navigation.goBack();
    }
    const img = dadosEsola.getMarkToUse().logo;

    return(
        <VStack flex={1} bg="primary.600">
            <Box>
                <View pt={10}>
                    <View alignItems={"flex-start"} >
                        <IconButton
                            icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                            onPress={handleBakc} 
                        /> 
                    </View>
                </View>                 
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
                        <Card title="Material De Estudo" icon={HouseLine} 
                            //onPress={() => handleCard(card.material_estudo.toString())} 
                             />
                        {/*Contato*/}
                        <Card title="Contato" icon={MapPinLine} 
                            //onPress={() => handleCard(card.contato.toString())} 
                            />
                        {/*Matricule-se*/}
                        <Card title="Matricule-se já" icon={ListChecks}
                            //onPress={() => handleCard(card.matriculese.toString())}
                            />
                    </View>

                    <View flexDirection="column" >
                        {/*Servicos*/}
                        <Card title="Serviços" icon={Files} 
                            //onPress={() => handleCard(card.servicos.toString())}  
                            />
                        {/*Login*/}
                        <Card title="Login" icon={Users}
                            //onPress={() => handleCard(card.login.toString())}  
                            />
                        {/*Parceiros*/}
                        <Card title="Parceiros" icon={PhoneCall} 
                            //onPress={() => handleCard(card.parceiros.toString())}  
                            />
                        

                    </View>
                </HStack>
                
                
            </ScrollView>
          
        </VStack>
    );
}

