import { Box, HStack, IconButton, ScrollView, Text, useTheme, View, VStack } from "native-base";
import { ArrowArcLeft, ArrowLeft } from "phosphor-react-native";
import { useState } from "react";
import { Calendar } from "react-native-calendars";
import {LocaleConfig} from 'react-native-calendars';
import { useNavigation } from "@react-navigation/native";

import { ButtonText } from "../../../components/ButtonText";
import { AgendamentoDados } from "../../../services/agendamentoservices/AgendamentoDados";


export function MarcarData(){
    const navigation = useNavigation(); 
    var agendamentodados = new AgendamentoDados();

    LocaleConfig.locales['br'] = {
        monthNames: [
          'Janeiro',
          'Fevereiro',
          'Março',
          'Abril',
          'Maio',
          'Junho',
          'Julho',
          'Agosto',
          'Setembro',
          'Outubro',
          'Novembro',
          'Dezembro'
        ],
        monthNamesShort: ['Jan.', 'Fev.', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul.', 'Ago', 'Set.', 'Out.', 'Nov.', 'Dez.'],
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
        today: "Hoje"
      };
    LocaleConfig.defaultLocale = 'br';

    
    const [date, setDate] = useState(
        {
        "dateString": "",
        "day": 0,
        "month": 0,
        "timestamp": 0,
        "year": 0,
      }
      );
    const {colors} = useTheme();

    function getVisual(ds){
        var mes = ds;
        if(mes<10){
            return "0"+mes;
        }else{
            return mes;                            
        }
    }

    function handleBakc(){
        navigation.goBack();
    }

    function concluirButton(){
        console.log(getDateFormatAgenda());
        agendamentodados.setAgendamentoData(getDateFormatAgenda());
        navigation.navigate('selecionarhorario');
    }

    function getDateFormatAgenda(){
        return getVisual(date["day"])+"/"+getVisual(date["month"])+"/"+date["year"];
    }
    
    return(
        <View flex={1} bg="primary.600" paddingTop={10} paddingLeft={5} paddingRight={5}>
            <HStack alignContent={"center"} alignItems={"center"} >
                <IconButton
                    icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                    onPress={handleBakc} 
                />
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22} >Cursos Matriculados</Text>
            </HStack>
            
            <ScrollView padding={10}> 
                <View>
                <Calendar
                    onDayPress={day => {
                        setDate(day);
                    }}

                    />
                    <Text paddingTop={10} >Data Marcada</Text>
                    <Text color={"primary.500"} paddingBottom={10} fontSize={18}>{getDateFormatAgenda()}</Text>
                    <ButtonText title="Selecionar Horário" onPress={()=> {concluirButton()}}></ButtonText>
                </View>
            </ScrollView>
            
        </View>
    );

}



