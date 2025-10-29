import { HStack, Box,Text, VStack, Image, 
    View, ScrollView, useTheme, IconButton} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Card } from "../../../components/Card";

import { User, HouseLine, MapPinLine, 
    ListChecks, Files, Users, PhoneCall, Car, QrCode, ArrowLeft} from 'phosphor-react-native';
import { DadosUser } from "../../../services/DadosUser";
import { AgendamentoDados } from "../../../services/agendamentoservices/AgendamentoDados";

export function HomeAgendamentos(){
    
    const agendamentoDados = new AgendamentoDados();
    const dadosUser = new DadosUser();

    const {colors} = useTheme();
    const navigation = useNavigation(); 

    function handleBakc(){
        navigation.goBack();
    }
    function handleCard(id_card){
        navigation.navigate('aulaspraticasagendamento');
        if(id_card=='aulaspraticasagendamento'){
            console.log("[HomeAgendamentos] setando tipo de agendamento 'Pratica'");
            agendamentoDados.setTipo('PRATICA');
        }else if(id_card=='aulasteoricasagendamento'){
            agendamentoDados.setTipo('TEORICA');
        }
    }
    const card = {
        aulaspraticasagendamento: 'aulaspraticasagendamento',
        simuladoragendamento: 'simuladoragendamento',
        aulasteoricasagendamento: 'aulasteoricasagendamento'
    };
    
    const img = dadosUser.getLogoext();

    return(
        <VStack flex={1} bg="primary.600">
            <Box>
                <View mt={10} alignItems={"flex-start"} >
                    <IconButton
                        icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                        onPress={handleBakc} 
                    /> 
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
                        {/*Aulas Práticas*/}
                        <Card title="Aulas Práticas" icon={HouseLine} 
                            onPress={() => handleCard(card.aulaspraticasagendamento.toString())}  />
                        {/*Simulador*/}
                        
                    </View>

                    <View flexDirection="column" >
                        {/*Aulas teóricas*/}
                        <Card title="Simulador" icon={MapPinLine} 
                            onPress={() => handleCard(card.simuladoragendamento.toString())} />
                        
                    </View>
                </HStack>
            </ScrollView>
          
        </VStack>
    );

}



