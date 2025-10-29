import { useNavigation } from "@react-navigation/native";
import { Box, HStack, IconButton, Image, Pressable, ScrollView, Text, useTheme, View, VStack } from "native-base";
import { ArrowLeft } from "phosphor-react-native";
import { ItemLinkUtil } from "../../../components/ItemLinkUtil";
import { OpenLink } from "../../../services/OpenLink";

export function LinksUteisMaterial(){
    const navegation = useNavigation();
    const {colors} = useTheme();
    const openlink = new OpenLink();

    var links = [
        'https://play.google.com/store/apps/details?id=br.gov.sp.detran.consultas&hl=pt_BR', //App Detran
        'http://www.detran.sp.gov.br/wps/portal/portaldetran/', //Site Detran
        'https://www.ipva.fazenda.sp.gov.br/IPVANET_Consulta/Consulta.aspx', //Consulta de IPVA
        'http://www3.prefeitura.sp.gov.br/multas/forms/frmPesquisarRenavam.aspx', //Consulta de multas
        'http://www.e-cnhsp.sp.gov.br/' //Consulta de aulas
    ];

    function handleBakc(){
        navegation.goBack();
    }
    function handleLink(index){
        navegation.navigate('viewlinks', links[index])
    }

    return(
        <VStack flex={1} bg="primary.600">
            <HStack pt={10} alignItems={"center"}>
                <View alignItems={"flex-start"} >
                    <IconButton
                        icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                        onPress={handleBakc} 
                    /> 
                </View>
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Links úteis - Material</Text>
                 
            </HStack>
            <ScrollView padding={5}>
                <VStack padding={5}>
                <ItemLinkUtil title={"App Detran"} site={links[0]} onPress={()=>{handleLink(0)}}></ItemLinkUtil>
                <ItemLinkUtil title={"Site Detran"} site={links[1]} onPress={()=>{handleLink(1)}}></ItemLinkUtil>
                <ItemLinkUtil title={"Consulta de IPVA"} site={links[2]} onPress={()=>{handleLink(2)}}></ItemLinkUtil>
                <ItemLinkUtil title={"Consulta de multas"} site={links[3]} onPress={()=>{handleLink(3)}}></ItemLinkUtil>
                <ItemLinkUtil title={"Consulta de aulas"} site={links[4]} onPress={()=>{handleLink(4)}}></ItemLinkUtil>
                </VStack>
            </ScrollView>
        </VStack>
    );
}



