import { useNavigation, useRoute } from "@react-navigation/native";
import { Box, HStack, IconButton, Image, ScrollView, Text, useTheme, View, VStack } from "native-base";
import { ArrowLeft, CarSimple } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { ButtonText } from "../../../components/ButtonText";
import { CardCursos } from "../../../components/CardCursos";
import { Ops } from "../../../components/Ops";
import { AgendamentoDados } from "../../../services/agendamentoservices/AgendamentoDados";
import { CursosMatriculados } from "../../../services/agendamentoservices/CursosMatriculados";
import { NovoAgendamento } from "../../../services/agendamentoservices/NovoAgendamento";
import { DadosUser } from "../../../services/DadosUser";

export function TelaRestricao(){
    const {colors} = useTheme();
    const navigation = useNavigation();

    const route = useRoute();

    const contents = route.params;
   
    function handleBakc(){
        navigation.goBack();
    }

    return (
        <View>
            <HStack alignContent={"center"} paddingTop={10} alignItems={"center"} >
                <IconButton
                    icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                    onPress={handleBakc} 
                />
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>{contents.titulo}</Text>
            </HStack>
            <View padding={10}>
                <Text paddingBottom={85}>{contents.msg}</Text>
                <View flexDirection={"row-reverse"}>
                    <ButtonText width={"150px"} title={"Voltar"} onPress={handleBakc}></ButtonText>
                </View>
                
            </View>
        </View>
    );


}

