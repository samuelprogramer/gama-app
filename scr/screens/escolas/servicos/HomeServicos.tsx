

import { HStack, Box,Text, VStack, Image, 
    View, ScrollView, useTheme, IconButton} from "native-base";
import { useNavigation } from "@react-navigation/native";



// Icones para os cards
import { HouseLine, MapPinLine, Files, Users,ArrowLeft, IdentificationCard, Stack, PlusCircle, ArrowsClockwise, CarSimple} from 'phosphor-react-native';
import { DadosEscolasMapa } from "../../../services/DadosEscolasMapa";
import { Card } from "../../../components/Card";


export function HomeServicos(){
    const navigation = useNavigation();
    const {colors} = useTheme();
    var dadosEsola = new DadosEscolasMapa();
        
    // Voltando
    function handleBakc(){
        navigation.goBack();
    }
    function handleCard(service_id){        
        navigation.navigate('paginaconteudo', service_id);
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
                    alt=" " 
                    source={{uri: img}}/>
                </View>
            </Box>
            <ScrollView mx={5} showsVerticalScrollIndicator={false}>

                
                <HStack w="full" justifyContent="center">
                    <View  flexDirection="column">
                        {/*Masterial de estudo*/}
                        <Card title="Primeira habilitação A/B" icon={IdentificationCard} 
                            onPress={() => handleCard(0)}  />
                        {/*Contato*/}
                        <Card title="Reabilitação" icon={Stack} 
                            onPress={() => handleCard(1)} />
                        <Card title="Reciclagem" icon={CarSimple} 
                            onPress={() => handleCard(2)} />
                    </View>

                    <View flexDirection="column" >
                        {/*Servicos*/}
                        <Card title="Adição de categoria" icon={PlusCircle} 
                            onPress={() => handleCard(3)}  />
                        {/*Login*/}
                        <Card title="PcD" icon={Users}
                            onPress={() => handleCard(4)}  />
                    </View>
                </HStack>
                
                
            </ScrollView>
          
        </VStack>
    );
}












