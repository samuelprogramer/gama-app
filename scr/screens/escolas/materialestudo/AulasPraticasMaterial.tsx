import { useNavigation } from "@react-navigation/native";
import { Box, HStack, IconButton, Image, Pressable, ScrollView, Text, useTheme, View, VStack } from "native-base";
import { ArrowLeft } from "phosphor-react-native";
import React from "react";
import { ItemAulas } from "../../../components/ItemAulas";
import { OpenLink } from "../../../services/OpenLink";

export function AulasPraticasMaterial(){
    const navegation = useNavigation();
    const {colors} = useTheme();
    const openlink = new OpenLink();

    var views = [
        'https://youtube.com/embed/_W3LncYYeJM',
        'https://youtube.com/embed/WBUHZYAXbus',
        'https://youtube.com/embed/AJRXXSH4O7o',
        'https://youtube.com/embed/i44yIGOgNEY'
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
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Aulas práticas - Material</Text>
                 
            </HStack>

            <ScrollView padding={5}>
                <VStack padding={5}>
                <ItemAulas title={"Conhecendo o veículo"} onPress={()=>{handleViewVideo(0)}}></ItemAulas>
                <ItemAulas title={"Erros que não devem ser cometidos no exame prático de carro"} onPress={()=>{handleViewVideo(1)}}></ItemAulas>
                <ItemAulas title={"Parada obrigatória, estacionamento na ladeira e finalização"} onPress={()=>{handleViewVideo(2)}}></ItemAulas>
                <ItemAulas title={"Erros que não devem ser cometidos no exame prático de moto"} onPress={()=>{handleViewVideo(3)}}></ItemAulas>
                </VStack>
            </ScrollView>
        </VStack>
    );
}



