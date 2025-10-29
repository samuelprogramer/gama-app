import { HStack, Box,Text, VStack, Image, 
    View, ScrollView, useTheme, IconButton} from "native-base";
import { useNavigation } from "@react-navigation/native";



// Icones para os cards
import { Users,ArrowLeft, IdentificationCard, Stack, PlusCircle, CarSimple, CalendarCheck, ShuffleAngular, MagnifyingGlass, Checks, ChatsCircle, UserGear, PencilSimpleLine, FirstAid, CheckSquareOffset, User} from 'phosphor-react-native';
import { DadosEscolasMapa } from "../../../services/DadosEscolasMapa";
import { Card } from "../../../components/Card";


export function NaoSouHabilitado(){
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
            //url = "https://www.detran.pe.gov.br/cadastro-para-primeira-habilitacao"
            navigation.navigate('matriculaonline', url);
        }else if(service_id==1){
            url = "https://www.detran.pe.gov.br/alteracao-de-dados-pessoais"
        }
        else if(service_id==2){
            url = "https://www.detran.pe.gov.br/prova-teorica-reteste"
        }
        else if(service_id==3){
            url = "https://www.detran.pe.gov.br/alteracao-de-endereco-e-mail-e-telefone"
        }
        else if(service_id==4){
            url = "https://www.detran.pe.gov.br/exames-psico-medicos"
        }
        else if(service_id==5){
            url = "https://www.detran.pe.gov.br/prova-pratica-reteste"
        }
        else if(service_id==6){
            url = "https://www.detran.pe.gov.br/isencao-para-nao-condutor-pessoa-com-deficiencia"
        }else if(service_id==7){// Curso teorico online
           
            url = "https://superau.la/";
        }else if(service_id==8){
            navigation.navigate('matriculaonline');
        }
        if(url!=""){
            navigation.navigate('viewwebservice', url);
        }
        
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
                        <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Serviços de Habilitação</Text>
                        
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
                        <Card title="Matricula" icon={IdentificationCard} 
                            onPress={() => handleCard(8)}  />
                        {/*Contato*/}
                        <Card title="Prova Prática/Reteste" icon={CheckSquareOffset} 
                            onPress={() => handleCard(5)} />
                    </View>

                    <View flexDirection="column" >
                        <Card title="Exames Psicomédicos" icon={FirstAid}
                                onPress={() => handleCard(4)}  />
                        <Card title="Prova Teórica/Reteste" icon={CheckSquareOffset} 
                            onPress={() => handleCard(2)} />
                        
                        
                    </View>
                </HStack>
                
                
                
            </ScrollView>
          
        </VStack>
    );
}












