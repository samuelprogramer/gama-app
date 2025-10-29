import { useNavigation, useRoute } from "@react-navigation/native";
import { Box, HStack, IconButton, Image, ScrollView, Text, useTheme, View, VStack } from "native-base";
import { ArrowLeft, Calendar, Clock, Info } from "phosphor-react-native";
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


export function DadosAula(){
    const {colors} = useTheme();
    const navegation = useNavigation();
    const dadosUser = new DadosUser();
    const img = dadosUser.getLogoext();

    const [canceltell, setCanceltell] = useState(false);

    function handleBakc(){
        navegation.goBack();
    }
    function piada(){}
    function cancelarAula(){
        setCanceltell(true);
    }
    function RealmenteCancelar(){
        sendDadosCancel();
    }
    function cancelay(){
        setCanceltell(false);
    }

    async function sendDadosCancel(){
        const dados = { aula: contents.id };

        const json = JSON.stringify(dados);
        await fetch(
            configspadrao.getUrlMain()+"/webservice/post/agenda/aulas/cancela/",
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

        if (result == -48) {
          /*
          this.setState({
            errorCancela:
              "Não é possível cancelar a aula que está agendada para menos de 48h.",
          });
          */
          alert("NÃO FOI POSSÍVEL CANCELAR A SUA AULA! ENTRE EM CONTATO COM A SUA AUTO ESCOLA. ")
          this.setState({ isLoading: false });
        } else if (result == -24) {
          /*
          this.setState({
            errorCancela:
              "Não é possível cancelar a aula que está agendada para menos de 24h.",
          });
          */
          alert("NÃO FOI POSSÍVEL CANCELAR A SUA AULA! ENTRE EM CONTATO COM A SUA AUTO ESCOLA. ")
          this.setState({ isLoading: false });
        } else if (result == -1) {
          this.setState({ errorCancela: "Falha ao cancelar a aula." });
          this.setState({ isLoading: false });
        } else {
          alert("Aula cancelada");
          navegation.goBack();
        }
      })
      .catch((error) => {
        console.log("error cancela", error);
      });
    }
    const route = useRoute();

    const contents = route.params;

    console.log(contents);

    return(
        <View>
            <HStack alignContent={"center"} paddingTop={10} alignItems={"center"} >
                <IconButton
                    icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                    onPress={handleBakc} 
                />
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Aula Marcada</Text>
            </HStack>
            <ScrollView>
                <View w={"100%"} h={155} alignContent={"center"} alignItems="center">
                        <Image
                        w={155} h={155} 
                        alt="logocfclegal" 
                        source={{uri: img}}/>
                </View>
                {canceltell?
                    <View padding={10}>
                        <View alignItems={"center"}>
                            <Text fontFamily={"Roboto_700Bold"} color={"red.600"}  fontSize={22}>Cancelar Aula</Text>
                        </View>
                        
                        <Text fontFamily={"Roboto_700Bold"} color={"primary.700"}  fontSize={22}>Deseja realmente cancelar a aula</Text>
                        <HStack padding={10}>
                            <ButtonText title={"Retornar"} onPress={cancelay} w={"50%"}></ButtonText>
                            <ButtonText title={"Cancelar Aula"} onPress={RealmenteCancelar} bg={"red.600"} w={"50%"}></ButtonText>
                        </HStack>
                    </View>    
                :
                    <View paddingTop={7} alignItems={"center"}>
                        <Box width={"80%"} borderRadius={10} padding={2} bg={"gray.50"}>
                            <HStack alignItems={"center"}><View>
                                <IconButton
                                    icon={<Clock color={colors.primary[700]} size={30}/>}
                                    onPress={piada} 
                                />
                                </View>
                                <VStack>
                                    <Text>Data marcada</Text> 
                                    <Text fontSize={18}>{contents.dia+"/"+contents.mes+"/"+contents.ano}</Text>
                                </VStack>
                            </HStack>
                        </Box>
                        <Box marginTop={5} width={"80%"} borderRadius={10} padding={2} bg={"gray.50"}>
                            
                            <HStack alignItems={"center"}><View>
                                <IconButton
                                    icon={<Calendar color={colors.primary[700]} size={30}/>}
                                    onPress={piada} 
                                />
                                </View>
                                <VStack>
                                    <Text>Horario marcado</Text> 
                                    <Text fontSize={18}>{contents.hora}</Text>
                                </VStack>
                            </HStack>
                        </Box>
                        <Box marginTop={5} width={"80%"} borderRadius={10} padding={2} bg={"gray.50"}>
                            <HStack>
                                <View>
                                    <IconButton
                                        icon={<Info color={colors.primary[700]} size={30}/>}
                                        onPress={piada} 
                                    />
                                </View>
                                <VStack>
                                    <Text>Instrutor</Text> 
                                    <Text fontSize={18}>{contents.instrutor}</Text>
                                    <Text>Status</Text>
                                    <Text fontSize={18}>{contents.posicao}</Text>
                                    <Text>Data da marcação</Text> 

                                    <Text fontSize={18}>{contents.datainclusao}</Text>
                                </VStack>
                            </HStack>
                        </Box>

                        <ButtonText marginTop={10} width={"70%"} title={"Cancelar Aula"} onPress={cancelarAula}></ButtonText>
                        
                    </View>
                }
            </ScrollView>

        </View>
    );

}


