import { HStack, Box,Text, VStack, Image, 
    View, ScrollView, useTheme, IconButton} from "native-base";
import { useNavigation } from "@react-navigation/native";

// Icones para os cards
import { HouseLine, MapPinLine, Files, Users,ArrowLeft} from 'phosphor-react-native';
import { DadosEscolasMapa } from "../../services/DadosEscolasMapa";

export function Parceiros(){
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

                <View w="full" h={255} alignItems="center">
                    <Text color={"primary.700"} >Não há parceiros a serem exibidos.</Text>
                </View>

            </Box>
          
        </VStack>
    );
}












