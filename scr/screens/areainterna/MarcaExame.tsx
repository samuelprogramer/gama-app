import { useNavigation } from "@react-navigation/native";
import { HStack, IconButton, Image, ScrollView, Text, useTheme, View } from "native-base";
import { ArrowLeft, CheckSquareOffset } from "phosphor-react-native";
import { Card } from "../../components/Card";
import { DadosUser } from "../../services/DadosUser";


export function MarcarExame(){

    const navigation = useNavigation();
    var dadosuser = new DadosUser();
    const img = dadosuser.getLogoext();
    const {colors} = useTheme();
    function handleBakc(){
        navigation.goBack();
    }

    function openLink(service_id: int){
        var url = "";
        if(service_id==5){
            url = "https://www.detran.pe.gov.br/prova-pratica-reteste"
        }if(service_id==2){
            url = "https://www.detran.pe.gov.br/prova-teorica-reteste"
        }
        if(url!=""){
            navigation.navigate('viewwebservice', url);
        }
    }
    
    return(
        <View flex={1} bg="primary.600" paddingTop={10} paddingLeft={5}>
            <HStack alignContent={"center"} alignItems={"center"} >
                <IconButton
                    icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                    onPress={handleBakc} 
                />
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22} >Marcar Exame</Text>
            </HStack>
            
            <ScrollView mx={5} showsVerticalScrollIndicator={false}>

                {img?               
                    <View p={60} w="full" h={255} alignItems="center">
                        <Image
                        w={"full"}
                        h={"full"}
                        alt=" " 
                        source={{uri: img}}/>
                    </View>
                    :
                    <View paddingTop={10}>

                    </View>
                }
                <HStack w="full" justifyContent="center">
                    <View  flexDirection="column">
                        <Card title="Prova Prática/Reteste" icon={CheckSquareOffset} 
                            onPress={() => openLink(5)} />
                    </View>

                    <View flexDirection="column" >
                        <Card title="Prova Teórica/Reteste" icon={CheckSquareOffset} 
                            onPress={() => openLink(2)} />
                        
                        
                    </View>
                </HStack>
                
                
                
            </ScrollView>
            
        </View>
        
    );

}

