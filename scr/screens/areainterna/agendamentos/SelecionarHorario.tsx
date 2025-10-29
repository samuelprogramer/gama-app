import { AspectRatio, Box, Button, Center, Heading, HStack, IconButton, Image, ScrollView, Stack, Text, useTheme, View, VStack } from "native-base";
import { ArrowLeft, SignOut } from "phosphor-react-native";
import { ButtonText } from "../../../components/ButtonText";
import { CardHorario } from "../../../components/CardHorario";
import { useNavigation } from "@react-navigation/native";
import { AgendamentoDados } from "../../../services/agendamentoservices/AgendamentoDados";
import { DadosUser } from "../../../services/DadosUser";
import ConfigsPadrao from "../../../api/ConfigsPadrao";
import { useEffect, useState } from "react";
import Moment from 'moment';
import { TransformData } from "../../../services/TransformData";
export function SelecionarHorario(){

    const navigation = useNavigation(); 
    const configs = new ConfigsPadrao();
    const transformData = new TransformData();
    var agendamentodados = new AgendamentoDados();
    var dadosUser = new DadosUser();
    const {colors} = useTheme();
    const [horarios, setHorarios] = useState([]);
    const [horariosSelected, setHorariosSelected] = useState([]);
    
    const [load, setLoad] = useState(true);
    
    var curso = agendamentodados.getCurso().nome;
    var instrutor = agendamentodados.getInstrutorObject().nome;
    var data = agendamentodados.getAgendamentodata();
   
    // Voltando para tela anterior
    function handleBakc(){
        navigation.goBack();
    }

    
    function envertendoData(dataoriginal){
      var dat = dataoriginal.toString().split("/");
      var dataOK = dat[2]+"-"+dat[1]+"-"+dat[0];
      return dataOK;
    }

    /** 
     * Pegando os horaios para serem exibidos na tela por meio da api
     * usamos um setState para modificarmos na tela as informações
     * com alguns dados a serem enviados
     */
    async function getHorarios(){
      const dados = {
        unidade: dadosUser.getUnidade(),
        tipo: agendamentodados.getTipo(),
        dia: transformData.envertendoData(data),
        aluno: dadosUser.getIduser(),
        curso: agendamentodados.getCurso().id,
        instrutor:  agendamentodados.getInstrutorObject().id,
        categoria: agendamentodados.getCurso().categorias,
      };
      const json = JSON.stringify(dados);
      await fetch(
          configs.getUrlMain()+"/webservice/agenda/post/retorno/disponibilidade/",
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
        // Tratando as informações
        var horarios_local = result.disponivel;
        setHorarios(horarios_local);
      });
    }

    /**
     * Clik do usuario em um dos horarios para pegarmos as informações
     * 
     * Um dos objetos 
     *   Object {
     *    "dia": "2022-09-12",
     *    "horarios": "20:00",
     *    "id_veiculo": 1,
     *    "instrutores": "11",
     *    "instrutores_nome": "Samuel Thi",
     *    "status": "livre",
     *    "tipo": "moto",
     *  },
     * 
     * @param horario_set 
     * @param index 
     */
    function handleSetHorario(horario_set, index){
      if(horarios[index].status == "select"){
        horarios[index].status = "livre";
      }else{
        horarios[index].status = "select";
      }
    }

    function finsh(){
      agendamentodados.cleanHorarios();
      for(var x =0;x<horarios.length;x++){
        if(horarios[x].status == "select"){
          agendamentodados.setHorariosObject(horarios[x]);
        }
        
      }
      navigation.navigate('confirmaragendamento');
    }

    useEffect(() => {
        getHorarios();
    },[])

    var indexCont = 0;

    return(
        <View flex={1} bg="primary.600">
            <HStack alignContent={"center"} paddingTop={10} alignItems={"center"} >
                <IconButton
                    icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                    onPress={handleBakc} 
                />
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Selecionar Horário</Text>
            </HStack>

            <Box alignItems="center">
              <Box maxW="80" width={"80%"} rounded="lg" overflow="hidden" borderColor="primary.700" borderWidth="1" _dark={{
                  borderColor: "coolGray.600",
                  backgroundColor: "primary.700"
                }} _web={{
                  shadow: 2,
                  borderWidth: 0
                }} _light={{
                  backgroundColor: "gray.50"
                }}>
                    <Stack p="4" space={3}>
                      <Stack space={2}>
                        <Heading size="md" ml="-1">
                          {curso}
                        </Heading>
                        <Text fontSize="xs" _light={{
                        color: "primary.500"
                      }} _dark={{
                        color: "violet.400"
                      }} fontWeight="500" ml="-0.5" mt="-1">
                          Instrutor - {instrutor}
                        </Text>
                      </Stack>
                <HStack alignItems="center" space={4} justifyContent="space-between">
                  <HStack alignItems="center">
                    <Text color="coolGray.600" _dark={{
                    color: "warmGray.200"
                  }} fontWeight="400">
                      Agendando para {data}
                    </Text>
                  </HStack>
                </HStack>
              </Stack>
            </Box>
          </Box>

            <VStack >
                
                <View padding={10}>
                  <ButtonText title="Proximo" onPress={finsh}></ButtonText>
                  <Text>Horários disponíveis</Text>
                  {load&&

                  
                  <ScrollView showsVerticalScrollIndicator={false}>
                    {
                      // Montando tela com base nos horarios recebidos
                      horarios.map(({horarios,status}) => {
                        var x1 = indexCont;
                        indexCont++;
                        try {
                            return (
                              <CardHorario title={horarios} onPress={()=>{handleSetHorario(horarios,x1)}}></CardHorario>
                            );
                          
                        }catch (e) {
                          console.log("Erro");
                          return(<View></View>);
                        }
                        
                        })
                    }
                  </ScrollView>  
                }                 
                </View>
                
            </VStack>

        </View>
    );

}


