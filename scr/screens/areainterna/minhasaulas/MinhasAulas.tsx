import { useNavigation } from "@react-navigation/native";
import { HStack, IconButton, ScrollView, Text, useTheme, View, VStack } from "native-base";
import { ArrowLeft } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { ButtonText } from "../../../components/ButtonText";
import { CardAgendadas } from "../../../components/CardAgendadas";
import { CardAulasConcluidas } from "../../../components/CardAulasConcluidas";
import { CardHorario } from "../../../components/CardHorario";
import { Loading } from "../../../components/Loading";
import { DadosUser } from "../../../services/DadosUser";
import ConfigsPadrao from "../../../api/ConfigsPadrao";
import { CardAulas } from "../../../components/CardAulas";

const configspadrao = new ConfigsPadrao();


export function MinhasAulas(){
    const {colors} = useTheme();
    const navegation = useNavigation();
    var dadosUser = new DadosUser();
    const [load, setLoad] = useState(false);
    const [cursos, setCursos] = useState([]);
    const [aulas, setAulas] = useState([]);
    
    
    /**
     * Lebrando que ao concluir o agendamento voltaremos para a tela home interna
     * e fecharemos todas as outras telas do agendamento
     */
    function handleBakc(){
        navegation.goBack();
    }

    useEffect(() => {
        navegation.addListener('focus', ()=>{
            setLoad(true);
            showAulas();
        })
        
    }, [navegation]);

    /*  RESPOSTA DA API
    Object {
        "cursos": Array [
            Object {
            "definicao": "PRATICO",
            "id_curso": 1,
            "nome_curso": "1° Habilitação A",
            "posicao": "cancelado",
            "qtd_aulas": 0,
            "tipo_curso": "final-de-semana",
            },
        ],
        "pratico": Array [
            Object {
            "ano": "2022",
            "datainclusao": "09/09/2022",
            "dia": "12",
            "diferenca": -3.3069444444444445,
            "hora": "12:00",
            "id": 1,
            "instrutor": "Samuel Thi",
            "mes": "setembro",
            "posicao": "ativo",
            "tipo": "pratica",
            },
        ],
        "teorico": Array [],
        }
    */
   
    async function showAulas(){
        const dados = {
            aluno: dadosUser.getIduser(),
            unidade: dadosUser.getIdUnidade(),
        };

        const json = JSON.stringify(dados);

        await fetch(
            configspadrao.getUrlMain()+"/webservice/post/retorna/aulas/",
            {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
            }
        )
        .then((response) => response.json())
        .then((result) => {
            setDadosLocal(result);
        })
        .catch((error) => {
        
        });
    }

    function setDadosLocal(response_api){
        setCursos(response_api.cursos);
        setAulas(response_api.pratico);
       
        setLoad(false);
    }


    useEffect(() => {
        showAulas();
    },[])


    if(load){
        return <Loading></Loading>
    }

    function openAula(id){
        for(var x = 0;x<aulas.length;x++){
            if(aulas[x].id == id){
                console.log(id);
                navegation.navigate("dadosaula",aulas[x]);
                console.log("Console escrita");
            }
        }
        
    }
    return(
        <View flex={1} bg="primary.600">
            <HStack alignContent={"center"} paddingTop={10} alignItems={"center"} >
                <IconButton
                    icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                    onPress={handleBakc} 
                />
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Aulas Agendadas</Text>
            </HStack>

            <VStack padding={10}>
                <ScrollView  showsVerticalScrollIndicator={false} >
                    <View paddingBottom={150}>
                        <View>
                            <Text fontFamily={"Roboto_700Bold"} color={"primary.500"} fontSize={18}>Cursos</Text>
                        </View>
                        <View>
                            {
                                // Montando mapa na tela
                                cursos.map(({nome_curso, posicao}) => {
                                    return (
                                        <CardAulasConcluidas curso={nome_curso} posicao={posicao}></CardAulasConcluidas>
                                        );                            
                                })
                            }
                        </View>
                        <Text paddingTop={50} fontFamily={"Roboto_700Bold"} color={"primary.500"} fontSize={18}>Aulas</Text>
                        <View marginTop={10}>
                            {
                                
                                // Montando mapa na tela
                                aulas.map(({id,dia, mes, ano, hora, tipo, instrutor, posicao, datainclusao}) => {
                                    
                                    
                                    return (
                                        <CardAulas
                                            dia={dia} 
                                            mes={mes} 
                                            ano={ano} 
                                            hora={hora} 
                                            tipo={tipo} 
                                            instrutor={instrutor}
                                            posicao={posicao} 
                                            datainclusao={datainclusao}
                                            onPress={()=>{openAula(id)}}
                                        >
                                                
                                        </CardAulas>
                                        );                            
                                })
                            }
                        </View>
                        {/*<View marginTop={10}>
                            <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Aulas Práticas</Text>
                            <CardAgendadas title={"oi"}></CardAgendadas>
                        </View>*/}
                    </View>
                </ScrollView>
            </VStack>

        </View>
    );

}


