import { HStack, Box,Text, VStack, Image, 
        View, ScrollView, useTheme, IconButton} from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { WebView } from 'react-native-webview';
import { ArrowLeft } from "phosphor-react-native";


export function ViewWebServices(){
    const navigation = useNavigation();
    const {colors} = useTheme();
    const route = useRoute();// Recuperando informações da rota para pegar dados
  
    const url = route.params;
    // Voltando
    function handleBakc(){
        navigation.goBack();
    }
  
    return(
        <VStack>
            <View>
                <HStack pt={10} alignItems={"center"}>
                    <View alignItems={"flex-start"} >
                        <IconButton
                            icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                            onPress={handleBakc} 
                        /> 
                    </View>
                    <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Serviços</Text>
                    
                </HStack>
            </View>
            <View w={"100%"} h={"100%"}> 
                <WebView source={{ uri: url }} />
            </View>
        </VStack>
        
    );
}
    
    
    
    
    
    
    
    
    
    
    
    
    