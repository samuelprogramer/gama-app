import { useNavigation } from "@react-navigation/native";
import { HStack, IconButton, ScrollView, Text, useTheme, View, VStack } from "native-base";
import { ArrowLeft, ChalkboardTeacher } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { CardCursos } from "../../../components/CardCursos";
import { AgendamentoDados } from "../../../services/agendamentoservices/AgendamentoDados";
import { Instrutores } from "../../../services/agendamentoservices/Instrutores";
import { DadosUser } from "../../../services/DadosUser";


export function SelecionarInstrutor(){
    var agendamentodados = new AgendamentoDados();
    const {colors} = useTheme();
    const instrutores = new Instrutores();
    const dadosUser = new DadosUser();
    const navegation = useNavigation();
    const [cursoSelected, setCursoSelected] = useState("");
    const [instrutoresvar, setInstrutoresvar] = useState(null);
    const [respostaText, setRespostaText] = useState("");
    


    async function getInstrutores(idcurso){
        console.log("idcurso: "+idcurso+" "+dadosUser.getIduser());
        var response = await instrutores.getInstrutoresApi(dadosUser.getIduser(), idcurso);
        console.log(response);
        if(response==-2){
            setRespostaText("Aluno não possui aprovação no exame teorico, entre em contato com sua auto escola");
        }else if(response==0){
            setRespostaText("Não há instrutores desta categoria de curso.")
        }else{
            
            setInstrutoresvar(instrutores.getInstrutores());
        }
       
    }

    function handleBakc(){
        navegation.goBack();
    }

    function proximaTela(index){
        agendamentodados.setInstrutorObject(instrutores.getInstrutores()[index]);
        navegation.navigate('marcadata');
    }


    useEffect(() => {
        getInstrutores(agendamentodados.getIdInstrutor());
        var curso = agendamentodados.getCurso();
        setCursoSelected(curso['nome']);
    },[])

    var indexinstrutor =0;
    return(
        <View flex={1} bg="primary.600">
            <HStack alignContent={"center"} paddingTop={10} alignItems={"center"} >
                <IconButton
                    icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                    onPress={handleBakc} 
                />
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Selecionar Instrutor</Text>
            </HStack>

            <VStack padding={10}>
                
                {
                    instrutoresvar==null?
                        <View>
                            <Text>{respostaText}</Text>
                        </View>
                    :
                        <View>
                            <View>
                                <Text fontFamily={"Roboto_700Bold"} color={"primary.500"} fontSize={16}>{cursoSelected}</Text>                    
                            </View>
                            <ScrollView padding={10}>
                                {
                                    instrutoresvar.map(({nome}) => {
                                        const index = indexinstrutor;
                                        indexinstrutor++;
                                        return (                
                                            <CardCursos title={nome} icon={ChalkboardTeacher} onPress={()=> {proximaTela(index)}}></CardCursos>
                                        );
                                    }
                                )}
                            </ScrollView>
                        </View>

                }
                
                
            </VStack>

        </View>
    );

}


