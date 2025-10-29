import { HStack, Box,Text, VStack, Image, 
    View, ScrollView, useTheme, IconButton} from "native-base";
import { useNavigation } from "@react-navigation/native";



// Icones para os cards
import { Users,ArrowLeft, IdentificationCard, Stack, PlusCircle, CarSimple, CalendarCheck, ShuffleAngular, MagnifyingGlass, Checks, ChatsCircle, PencilSimpleLine, FirstAid, CheckSquareOffset, UserGear, Plus, ArrowCounterClockwise, ArrowSquareDown, Package, DeviceMobile, PoliceCar, User, WarningOctagon, CalendarX, Person} from 'phosphor-react-native';
import { DadosEscolasMapa } from "../../../services/DadosEscolasMapa";
import { Card } from "../../../components/Card";


export function SouHabilitado(){
    const navigation = useNavigation();
    const {colors} = useTheme();
    var dadosEsola = new DadosEscolasMapa();    
    
    // Voltando
    function handleBakc(){
        navigation.goBack();
    }

    //https://www.detran.pe.gov.br/permissao-internacional-para-dirigir-pid
    function handleCard(service_id){  
        var url = "";    
        if(service_id==0){
            url = "https://www.detran.pe.gov.br/cnh-definitiva"
        }else if(service_id==1){
            url = "https://www.detran.pe.gov.br/entrega-de-cnh"
        }
        else if(service_id==2){
            url = "https://www.detran.pe.gov.br/atividades-remunerada"
        }
        else if(service_id==3){
            url = "https://www.detran.pe.gov.br/transferencia-de-pontos-da-cnh"
        }
        else if(service_id==4){
            url = "https://www.detran.pe.gov.br/cnh-suspensa-ou-cassada"
        }
        else if(service_id==5){
            url = "https://www.detran.pe.gov.br/curso-preventivo-de-reciclagem"
        }
        else if(service_id==6){
            url = "https://www.detran.pe.gov.br/prova-teorica-de-reciclagem"
        }
        else if(service_id==7){
            url = "https://www.detran.pe.gov.br/exames-psico-medicos"
        }
        else if(service_id==8){
            url = "https://www.detran.pe.gov.br/isencao-para-condutor-pessoa-com-deficiencia"
        }
        else if(service_id==9){
            url = "https://www.detran.pe.gov.br/renovacao-de-cnh"
        }
        else if(service_id==10){
            url = "https://www.detran.pe.gov.br/cnh-eletronica-digital"
        }
        else if(service_id==11){
            url = "https://www.detran.pe.gov.br/entrega-de-cnh"
        }
        else if(service_id==12){
            url = "https://www.detran.pe.gov.br/adicao-de-categoria"
        }
        else if(service_id==13){
            url = "https://www.detran.pe.gov.br/rebaixamento-retorno-de-categoria"
        }else if(service_id==14){
            url = "https://www.detran.pe.gov.br/permissao-internacional-para-dirigir-pid";
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
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={16}>CNH Definitiva</Text>
                <HStack w="full" justifyContent="center">
                    <View  flexDirection="column">
                        {/*Masterial de estudo*/}
                        <Card title="CND Definitiva" icon={IdentificationCard} 
                            onPress={() => handleCard(0)}  />
                        {/*Contato*/}
                       
                        
                    </View>

                    <View flexDirection="column" >
                        <Card title="Entrega de CNH" icon={Package} 
                                onPress={() => handleCard(1)} />
                        
                    </View>
                </HStack>

                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={16}>Alterações de dados do condutor</Text>
                <HStack w="full" justifyContent="center">
                    <View  flexDirection="column">
                    <Card title="Atividade remunerada" icon={PoliceCar} 
                            onPress={() => handleCard(2)} />
                    </View>
                    <View flexDirection="column" >
                        <View h={120} w={120} m={3}></View>               
                    </View>
                </HStack>


                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={16}>Exames Psicomédicos</Text>
                <HStack w="full" justifyContent="center">
                    <View  flexDirection="column">
                        <Card title="Exames Psicomédicos" icon={FirstAid}
                        onPress={() => handleCard(7)}  />
                    </View>
                    <View flexDirection="column" >
                        <Card title="PCD" icon={User} 
                        onPress={() => handleCard(8)} />              
                    </View>
                </HStack>
                
               

                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={16}>Infrações e penalidades</Text>
                <HStack w="full" justifyContent="center">
                    <View  flexDirection="column">
                        <Card title="Identificação de condutor infrator" icon={WarningOctagon} 
                            onPress={() => handleCard(3)}  />
                        <Card title="CNH suspensa ou cassada" icon={CalendarX} 
                            onPress={() => handleCard(4)}  />
                    </View>
                    <View flexDirection="column" >
                        <Card title="Reciclagem" icon={Person} 
                            onPress={() => handleCard(5)}  />
                        <Card title="Prova teorica de reciclagem" icon={ChatsCircle} 
                            onPress={() => handleCard(6)}  />            
                    </View>
                </HStack>
                


                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={16}>Renovação de CNH</Text>

                <HStack w="full" justifyContent="center">
                    <View  flexDirection="column">
                        <Card title="Renovação de CNH" icon={ArrowCounterClockwise} 
                            onPress={() => handleCard(9)}  />
                        <Card title="CNH Eletrônica" icon={DeviceMobile} 
                            onPress={() => handleCard(10)}  />
                    </View>
                    <View flexDirection="column" >
                        <Card title="Entrega de CNH" icon={Package} 
                        onPress={() => handleCard(11)}  />             
                    </View>
                </HStack>

                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={16}>Serviços relacionados à categoria da CNH</Text>
                <HStack w="full" justifyContent="center">
                    <View  flexDirection="column">
                        <Card title="Adição de categoria" icon={Plus} 
                        onPress={() => handleCard(12)}  />
                    </View>
                    <View flexDirection="column" >
                        <Card title="Rebaixamento de categoria" icon={ArrowSquareDown} 
                        onPress={() => handleCard(13)}  />              
                    </View>
                </HStack>

                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={16}>Permissao Internacional para Dirigir</Text>
                <HStack w="full" justifyContent="center">
                    <View  flexDirection="column">
                        <Card title="PID" icon={Plus} 
                        onPress={() => handleCard(14)}  />
                    </View>
                    <View flexDirection="column" >
                        <View h={120} w={120} m={3}></View>     
                    </View>
                </HStack>
                
                
            </ScrollView>
          
        </VStack>
    );
}












