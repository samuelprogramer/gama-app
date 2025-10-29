import { useNavigation } from "@react-navigation/native";
import { Box, HStack, IconButton, Image, Pressable, ScrollView, Text, useTheme, View, VStack } from "native-base";
import { ArrowLeft } from "phosphor-react-native";
import React from "react";
import { ItemAulas } from "../../../components/ItemAulas";
import { DadosUser } from "../../../services/DadosUser";
import { UrlsToContent } from "./UrlsTocontent";


export function ConteudoVip(){
    const urls_get = new UrlsToContent();
    const navegation = useNavigation();
    const dadosUser = new DadosUser();
    var ID_unidade = dadosUser.getIdUnidade();
    const {colors} = useTheme();
    
    var views = urls_get.getUrlsPadao();
    if(parseInt(ID_unidade)==4){
        views = urls_get.getUrls_CTRAN();
    }

    function handleBakc(){
        navegation.goBack();
    }
    function handleViewVideo(link){
        navegation.navigate('viewlinks', link)
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
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Conteudo VIP</Text>
                 
            </HStack>
            <ScrollView padding={5}>
                <VStack padding={5}>
                    <Text color={"primary.500"} fontSize={20}>Aulas Téoricas</Text>
                    {
                        views.map((item)=>{
                            
                            if(item.link=="handle"){
                                return (<Text color={"primary.700"} >{item.title}</Text>);
                            }else{
                                return (
                                    <ItemAulas title={item.title} onPress={()=>{handleViewVideo(item.link)}}></ItemAulas>
                                    
                                );
                            }
                        })
                    }
                </VStack>
            </ScrollView>
        </VStack>
    );
}



