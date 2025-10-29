import { useNavigation } from "@react-navigation/native";
import { Box, HStack, IconButton, Image, Pressable, ScrollView, Text, useTheme, View, VStack } from "native-base";
import { ArrowLeft } from "phosphor-react-native";
import { ItemAulas } from "../../../components/ItemAulas";
import { OpenLink } from "../../../services/OpenLink";

export function AulasTeoricasMaterial(){
    const navegation = useNavigation();
    const {colors} = useTheme();
    const openlink = new OpenLink();

    var views = [
        'https://youtube.com/embed/SOEsy4mP4DI', //Legislação
        'https://www.youtube.com/embed/sVWAL8gw63o', //https://youtube.com/embed/sVWAL8gw63o
        'https://youtube.com/embed/20eA2IB_1QI', //Socorro
        'https://youtube.com/embed/f1QhyJcSPLg', //Mecanica
        'https://youtube.com/embed/VY1JgSd1AO8', //Meio ambiente
        'https://youtube.com/embed/UapP-BqVDEs' //Cidadania
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
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Aulas teóricas - Material</Text>
                 
            </HStack>
            <ScrollView padding={5}>
                <VStack padding={5}>
                <ItemAulas title={"Legislação de trânsito"} onPress={()=>{handleViewVideo(0)}}></ItemAulas>
                <ItemAulas title={"Direção defensiva"} onPress={()=>{handleViewVideo(1)}}></ItemAulas>
                <ItemAulas title={"Primeiros socorros"} onPress={()=>{handleViewVideo(2)}}></ItemAulas>
                <ItemAulas title={"Mecânica básica"} onPress={()=>{handleViewVideo(3)}}></ItemAulas>
                <ItemAulas title={"Meio ambiente"} onPress={()=>{handleViewVideo(4)}}></ItemAulas>
                <ItemAulas title={"Cidadania"} onPress={()=>{handleViewVideo(5)}}></ItemAulas>
                </VStack>
            </ScrollView>
        </VStack>
    );
}



