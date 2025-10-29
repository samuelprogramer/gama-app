import { HStack, Box,Text, VStack, Image, 
    View, ScrollView, useTheme, IconButton} from "native-base";
import { useNavigation } from "@react-navigation/native";

// Icones para os cards
import { HouseLine, MapPinLine, Files, Users,ArrowLeft} from 'phosphor-react-native';
import { DadosEscolasMapa } from "../../../services/DadosEscolasMapa";
import { Card } from "../../../components/Card";

export function HomeMaterial(){
    const navigation = useNavigation();
    const {colors} = useTheme();
    var dadosEsola = new DadosEscolasMapa();
    
    const card = {
        aulaspraticasmaterial: 'aulaspraticasmaterial',
        aulasteoricasmaterial: 'aulasteoricasmaterial',
        percursomaterial: 'percursomaterial',
        linksuteismaterial: 'linksuteismaterial'
    };
    
    // Voltando
    function handleBakc(){
        navigation.goBack();
    }

    function handleCard(card_id: string){
        navigation.navigate(card_id);
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
                        <Card title="Aulas Práticas" icon={HouseLine} 
                            onPress={() => handleCard(card.aulaspraticasmaterial.toString())}
                        />
                            
                        {/*Percurso*/}
                        <Card title="Percurso" icon={MapPinLine} 
                           onPress={() => handleCard(card.percursomaterial.toString())}
                        />
                    </View>

                    <View flexDirection="column" >
                        {/*Servicos*/}
                        <Card title="Aulas Teoricas" icon={Files} 
                           onPress={() => handleCard(card.aulasteoricasmaterial.toString())}
                        />

                        {/*LinksUteis*/}
                        <Card title="LinksUteis" icon={Users}
                           onPress={() => handleCard(card.linksuteismaterial.toString())}
                        />
                    </View>
                </HStack>
                
                
            </ScrollView>
          
        </VStack>
    );
}












