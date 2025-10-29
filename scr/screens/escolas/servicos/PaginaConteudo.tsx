/**
 * As informações para essa pagina veem por meio da
 * ./services/DadosServicos.tsx
 * 
 * para uma melhor comunicação e padrao
 */

import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import { Box, IconButton, Image, ScrollView, Text, View, VStack } from "native-base";
import { ArrowLeft } from "phosphor-react-native";
import { ButtonText } from "../../../components/ButtonText";
import { DadosEscolasMapa } from "../../../services/DadosEscolasMapa";
import { DadosServicos } from "../../../services/DadosServicos";
import { DadosNavegacaoEscola } from "../../../services/DadosNavegacaoEscola";
import { Linking } from "react-native";

export function PaginaConteudo(){

    const route = useRoute();// Recuperando informações da rota para pegar dados
  
    const serviceId = route.params;

    var dadosEsola = new DadosEscolasMapa();
    var dadosservico = new DadosServicos();
    var dadosNavegacao = new DadosNavegacaoEscola();

    const navegation = useNavigation();
    const {colors} = useTheme();

    const img = dadosEsola.getMarkToUse().logo;

    var dados = [];


    function setData(){
        switch(serviceId.toString()){
            case "0":
                dados = dadosservico.getPrimeiraHabilitacao();
                break
            case "1":
                // reabilitacao
                dados = dadosservico.getReabilitacao();
                break
            case "2":
                // Simulador
                dados = dadosservico.getSimulador();
                break
            case "3":
                // Adicao categoria
                dados = dadosservico.getAdicaoCategoria();
                break
            case "4":
                // Pcd
                dados = dadosservico.getpcd();
                break

        }
    }

    setData();


    function handleBakc(){
        navegation.goBack();
    }
    function handleFaleComNosco(){
        Linking.openURL(`whatsapp://send?phone=+55${dadosNavegacao.getWhatsapp_local()}&text=Estou vindo do CFCLegal`);
    }

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
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>{dados[0]}</Text>
                <Text textAlign={"justify"} fontSize={15} p={3}>{dados[1]}</Text>
                <ButtonText title="Fale Conosco" onPress={handleFaleComNosco}></ButtonText>
            </ScrollView>
            </VStack>
    );

}






