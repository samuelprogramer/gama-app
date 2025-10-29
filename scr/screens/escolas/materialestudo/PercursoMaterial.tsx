import { useNavigation } from "@react-navigation/native";
import { Box, HStack, IconButton, Image, Pressable, ScrollView, Text, useTheme, View, VStack } from "native-base";
import { ArrowLeft } from "phosphor-react-native";
import { ItemAulas } from "../../../components/ItemAulas";
import { OpenLink } from "../../../services/OpenLink";

export function PercursoMaterial(){
    const navegation = useNavigation();
    const {colors} = useTheme();
    const openlink = new OpenLink();

    var views = [
        'https://youtube.com/embed/r5pxV26J6wU', //Simulaçao exame prático, saída e baliza
        'https://youtube.com/embed/o_y1zH3d9zU' //Exame prático de moto
    ];

    function handleBakc(){
        navegation.goBack();
    }
    function handleViewVideo(index){
        navegation.navigate('viewlinks', views[index])
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
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Percurso - Material</Text>
                 
            </HStack>
            <ScrollView padding={5}>
            <Text color={"#909090"} >Abaixo você encotrará a simulação dos percursos práticos de CARRO e MOTO, lembrando sempre que as informações que você encontra aqui tem mero caráter informativo.</Text>
                <VStack padding={5}>
                <ItemAulas title={"Simulação exame prático, saída e baliza"} onPress={()=>{handleViewVideo(0)}}></ItemAulas>
                <ItemAulas title={"Exame prático de moto"} onPress={()=>{handleViewVideo(1)}}></ItemAulas>
                </VStack>
            </ScrollView>
        </VStack>
    );
}



