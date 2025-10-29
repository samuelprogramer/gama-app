import { useNavigation } from "@react-navigation/native";
import { HStack, IconButton, ScrollView, Text, useTheme, View } from "native-base";
import { ArrowLeft, HeartBreak } from "phosphor-react-native";
import { Linking } from "react-native";
import { ButtonText } from "./ButtonText";



export function Ops() {
    const { colors } = useTheme();
    const navigation = useNavigation();
    function handleBakc() {
        navigation.goBack();
    }
    function reportar() {
        console.log("Reportando");
        Linking.openURL(`whatsapp://send?phone=+5511971687619&text=Ola, o AeDigitals teve um problema`);
    }
    return (
        <View flex={1} bg="primary.600" h={"100%"} paddingTop={10}>
            <HStack alignContent={"center"} alignItems={"center"} >
                <IconButton
                    icon={<ArrowLeft color={colors.primary[700]} size={30} />}
                    onPress={handleBakc}
                />
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22} >OPS!</Text>
            </HStack>
            <ScrollView>
                <View justifyContent={"center"} h={"100%"} padding={10}>
                    <HeartBreak color={colors.red[500]} size={50} />
                    <Text >Parece que ainda não há cursos cadastrados para você!</Text>
                    <Text paddingTop={7} fontSize={15}  >Entre em contato com a sua autoescola para solicitar a inclusão de cursos.</Text>
                    <Text paddingTop={5} fontSize={18} color={colors.primary[500]} >Caso o problema percistir</Text>
                    <Text paddingTop={5} fontSize={15} marginBottom={5} >Informe-nos sobre o erro</Text>
                    <ButtonText title="REPORTAR" onPress={reportar} />
                </View>
            </ScrollView>

        </View>

    );

}






