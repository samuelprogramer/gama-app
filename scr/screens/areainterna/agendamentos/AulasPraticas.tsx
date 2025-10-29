import { useNavigation } from "@react-navigation/native";
import { Box, HStack, IconButton, Image, ScrollView, Text, useTheme, View, VStack } from "native-base";
import { ArrowLeft, CarSimple } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { CardCursos } from "../../../components/CardCursos";
import { Ops } from "../../../components/Ops";
import { AgendamentoDados } from "../../../services/agendamentoservices/AgendamentoDados";
import { CursosMatriculados } from "../../../services/agendamentoservices/CursosMatriculados";
import { NovoAgendamento } from "../../../services/agendamentoservices/NovoAgendamento";
import { DadosUser } from "../../../services/DadosUser";

export function AulasPraticas(){
    var cursosMat = new CursosMatriculados();
    var agendamentodados = new AgendamentoDados();
    const {colors} = useTheme();
    const navigation = useNavigation(); 
    const novoAgendamento = new NovoAgendamento();
    const userDados = new DadosUser();
    const [cursos, setCursos] = useState([]);
    

    async function getAgendamentos(id){
        console.log(id)
        await novoAgendamento.getCursosMatriculados(id);
        setCursos(cursosMat.getCursosTodos());
    }

    function handleBakc(){
        navigation.goBack();
    }

    useEffect(() => {
        getAgendamentos(userDados.getIduser());
    },[])

    function handlesetInstrutor(id: string, indexcurso){
        agendamentodados.setIdInstrutor(id);
        agendamentodados.setCurso(cursosMat.getCursosTodos()[indexcurso]);
        navigation.navigate('setinstrutores');  
    }
    
    var indexcurso =0;
    try{
        
        return(
            <View flex={1} bg="primary.600" paddingTop={10} paddingLeft={5}>
                <HStack alignContent={"center"} alignItems={"center"} >
                    <IconButton
                        icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                        onPress={handleBakc} 
                    />
                    <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22} >Cursos Matriculados</Text>
                </HStack>
                
                <ScrollView padding={10}>
                    {
                        cursos.map(({nome, id}) => {
                            const x1 = indexcurso;
                            indexcurso++;
                            return (
                                <CardCursos title={nome} icon={CarSimple} onPress={()=>{handlesetInstrutor(id,x1)}}></CardCursos>
                            );
                        }
                    )}
                </ScrollView>
                
            </View>
            
        );
    }catch(error){
        console.log("Erro AulasPraticas catch tela: "+error);
        return (
        <Ops/>
        );
    }


}

