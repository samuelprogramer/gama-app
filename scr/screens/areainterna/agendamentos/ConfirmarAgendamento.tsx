import { useNavigation } from "@react-navigation/native";
import { Box, Center, HStack, IconButton, Spinner, Text, useTheme, View, VStack } from "native-base";
import { ArrowLeft } from "phosphor-react-native";
import { useState } from "react";
import { ButtonText } from "../../../components/ButtonText";
import { CardHorario } from "../../../components/CardHorario";
import { Loading } from "../../../components/Loading";
import { Ops } from "../../../components/Ops";
import { AgendamentoDados } from "../../../services/agendamentoservices/AgendamentoDados";
import { DadosUser } from "../../../services/DadosUser";
import { TransformData } from "../../../services/TransformData";
import ConfigsPadrao from "../../../api/ConfigsPadrao";

const configspadrao = new ConfigsPadrao();
export function ConfirmarAgendamento(){
    const {colors} = useTheme();
    const navegation = useNavigation();
    var agendamentodados = new AgendamentoDados();
    var dadosUser = new DadosUser();
    const transformdata = new TransformData();
    const [loading, setLoading] = useState(false); 


    /**
     * Lebrando que ao concluir o agendamento voltaremos para a tela home interna
     * e fecharemos todas as outras telas do agendamento
     */
    function handleBakc(){
        navegation.goBack();
    }

    /*
            $unidade = 93;
			$tipo = 'pratica';
			$aluno = 52686; //13080;
			$instrutor = 13148; //13077;
			$hora = json_encode(array("14:50"));
			$dia = substr('2022-02-25T15:00:00.000Z', 0, 10);
			$curso = 40638;
			$veiculo = 103;
			$categoria = 'A';
    */
    async function agendaAula(){
        const values = {
            unidade: Number(dadosUser.getIdUnidade()),
            aluno: Number(dadosUser.getIduser()),
            tipo: agendamentodados.getTipo().toLowerCase(),
            instrutor: agendamentodados.getInstrutorObject().id,
            hora: agendamentodados.getHorariosObject(),
            //hora: ['17:00'],
            
            dia: transformdata.envertendoData(agendamentodados.getAgendamentodata()),
            curso: agendamentodados.getCurso().id,           
            // O veiculo esta vindo juntamento com o horario
            veiculo: agendamentodados.getVeitulo(), 
            categoria: agendamentodados.getCurso().categorias
        }
        const json = JSON.stringify(values);
        
        console.log(json);
        
        await fetch(configspadrao.getUrlMain()+'/webservice/post/agenda/salva/entrada/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: json
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                if(result==1){
                    // Tudo certo pode passar
                    // Estava pramando com preça entao fiz esta gambiarra para voltar para a home fechando as telas
                    // Se Estiver com tempo e puder, faça diferente para voltar para a home
                    navegation.goBack();
                    navegation.goBack();
                    navegation.goBack();
                    navegation.goBack();
                    navegation.goBack();
                    navegation.goBack();
                    navegation.navigate("telarestricao",
                            {titulo: "AULAS AGENDADAS",msg:" Suas aulas foram agendadas"});
                }else{
                    switch(result.result){
                        case -21:
                            navegation.navigate("telarestricao",
                            {titulo: "Máximo de aulas",msg:"Máximo de aulas seguidas acima do limite.\n Retorne a pagina anterior e re agende a 3 aula"});
                            break;
                        case -1://'Limite de aulas contratadas excedido.' 
                            break;
                        case -2://'Problemas com aulas próximas.'
                            break;
                        case -5://'Atingido limite de aulas diárias.'
                            break;
                        case -10://'Não há saldo de aulas.' 
                            break;
                        case -22://'Intervalo entre aulas nao respeitado.' 
                            break;
                        case 110://'Nao há horários disponíveis.'
                            break;
                        case 222://'Nao foi possível realizar o agendamento.'
                            break;

                    }
                    setLoading(false);
                }
                
            })
            .catch((error) => {
                setLoading(false);
                console.log(error.message);
            });
            

    }
    
    if(loading){
        return <Loading></Loading>
    }


    function agendar(){
        setLoading(true);
        agendaAula();
    }

    return(
        <View flex={1} bg="primary.600">
            <HStack alignContent={"center"} paddingTop={10} alignItems={"center"} >
                <IconButton
                    icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                    onPress={handleBakc} 
                />
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Confirme os Dados</Text>
            </HStack>

            <VStack padding={10}>
                <View>
                    <Text fontFamily={"Roboto_700Bold"} color={"primary.500"} fontSize={12}>Aluno</Text>
                    <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={16}>{dadosUser.getNome()}</Text>
                    <Text fontFamily={"Roboto_700Bold"} color={"primary.500"} fontSize={12}>Data</Text>
                    <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={16}>{agendamentodados.getAgendamentodata()}</Text>
                    <Text fontFamily={"Roboto_700Bold"} color={"primary.500"} fontSize={12}>Instrutor</Text>
                    <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={16}>{agendamentodados.getInstrutorObject().nome}</Text>
                    <Text fontFamily={"Roboto_700Bold"} color={"primary.500"} fontSize={12}>Horarios</Text>
                    <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={16}>{agendamentodados.getHorariosUser()}</Text>
                            
                </View>
                <View padding={10}>
                    <ButtonText title="Confirmar Agendamento" onPress={agendar}/>
                </View>
                
            </VStack>

        </View>
    );

}


