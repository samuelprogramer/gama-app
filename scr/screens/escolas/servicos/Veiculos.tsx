import { HStack, Box,Text, VStack, Image, 
    View, ScrollView, useTheme, IconButton} from "native-base";
import { useNavigation } from "@react-navigation/native";



// Icones para os cards
import { Users,ArrowLeft, IdentificationCard, Stack, PlusCircle, CarSimple, CalendarCheck, ShuffleAngular, MagnifyingGlass, Checks, ChatsCircle} from 'phosphor-react-native';
import { DadosEscolasMapa } from "../../../services/DadosEscolasMapa";
import { Card } from "../../../components/Card";


export function Veiculos(){
    const navigation = useNavigation();
    const {colors} = useTheme();
    var dadosEsola = new DadosEscolasMapa();    
    
    // Voltando
    function handleBakc(){
        navigation.goBack();
    }
    function handleCard(service_id){  
        var url = "";    
        if(service_id==0){
            url = "https://www.detran.pe.gov.br/licenciamento-ipva"
        }else if(service_id==1){
            url = "https://www.detran.pe.gov.br/crv-e-atpv"
        }
        else if(service_id==2){
            url = "https://www.detran.pe.gov.br/vendi-meu-veiculo-comunicacao-de-venda"
        }
        else if(service_id==3){
            url = "https://www.detran.pe.gov.br/transferencia-de-veiculo-de-outro-estado-para-pernambuco"
        }
        else if(service_id==4){
            url = "https://www.detran.pe.gov.br/extrato-de-debitos-nada-consta"
        }
        else if(service_id==5){
            url = "https://www.detran.pe.gov.br/transferencia-de-propriedade-mudanca-de-proprietario"
        }
        else if(service_id==6){
            url = "https://www.detran.pe.gov.br/consulta-de-multas-e-infracoes"
        }
        navigation.navigate('viewwebservice', url);
    }
    const img = dadosEsola.getMarkToUse().logo;

    return(
        <VStack flex={1} bg="primary.600">
            <Box>
                <View>
                    <HStack pt={10} alignItems={"center"}>
                        <View alignItems={"flex-start"} >
                            <IconButton
                                icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                                onPress={handleBakc} 
                            /> 
                        </View>
                        <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Serviços de Veiculo</Text>
                        
                    </HStack>
                </View>  
                
            </Box>
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
                        {/*Masterial de estudo*/}
                        <Card title="Licencamento IPVA" icon={IdentificationCard} 
                            onPress={() => handleCard(0)}  />
                        {/*Contato*/}
                        <Card title="CRV e ATPV" icon={Checks} 
                            onPress={() => handleCard(1)} />
                        <Card title="Comunicação de vendas" icon={ChatsCircle} 
                            onPress={() => handleCard(2)} />
                        <Card title="Tranferencia de veiculo para pernanbuco" icon={ShuffleAngular} 
                            onPress={() => handleCard(3)} />
                    </View>

                    <View flexDirection="column" >
                        {/*Servicos*/}
                        <Card title="Extrato Geral de Debitos" icon={CalendarCheck} 
                            onPress={() => handleCard(4)}  />
                        {/*Login*/}
                        <Card title="Transferencia de Propriedade" icon={Users}
                            onPress={() => handleCard(5)}  />
                        <Card title="Consulta de mutas" icon={MagnifyingGlass} 
                            onPress={() => handleCard(6)} />
                    </View>
                </HStack>
                
                
            </ScrollView>
          
        </VStack>
    );
}












