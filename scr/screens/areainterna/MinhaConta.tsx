import { useNavigation } from "@react-navigation/native";
import { HStack, IconButton, ScrollView, Text, useTheme, View } from "native-base";
import { ArrowLeft } from "phosphor-react-native";
import { DadosUser } from "../../services/DadosUser";

import ApiLogin from "../../api/ApiLogin";
import { ButtonText } from "../../components/ButtonText";

export function MinhaConta(){

    const navigation = useNavigation();
    var dadosuser = new DadosUser();
    var apilogin = new ApiLogin();

    const {colors} = useTheme();
    function handleBakc(){
        navigation.goBack();
    }

    function handleViewContrato(){
        navigation.navigate('contratoview');
    }

    return(
        <View flex={1} bg="primary.600" paddingTop={10} >
            <HStack alignContent={"center"} alignItems={"center"} >
                <IconButton
                    icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                    onPress={handleBakc} 
                />
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22} >Dados Pessoais</Text>
            </HStack>
            
            
            
            <ScrollView >
                <View paddingLeft={5}>
                    <Text color={"primary.500"} marginTop={7} fontSize={16}>Nome</Text>
                    <Text color={"primary.700"} fontSize={20}>{dadosuser.getNome()}</Text>
                    <Text color={"primary.500"} marginTop={7} fontSize={16}>Telefone</Text>
                    <Text color={"primary.700"} fontSize={20}>{dadosuser.getTelefone()}</Text>
                    <Text color={"primary.500"} marginTop={7} fontSize={16}>Celular</Text>
                    <Text color={"primary.700"} fontSize={20}>{dadosuser.getWhatsapp()}</Text>
                    <Text color={"primary.500"} marginTop={7} fontSize={16}>Email</Text>
                    <Text color={"primary.700"} fontSize={20}>{apilogin.getEmailuser()}</Text>
                    <Text color={"primary.500"} marginTop={7} fontSize={16}>Escola cadastrada</Text>
                    <Text color={"primary.700"} fontSize={20}>{dadosuser.getEscola()}</Text>
                                        
                </View>
                <View width={"100%"} alignItems={'center'} paddingTop={10}>
                <View width={"80%"}>
                    <ButtonText title="Visualizar Contrato" onPress={handleViewContrato}></ButtonText>
                </View>
            </View>
            </ScrollView>
            
        </View>
        
    );

}

