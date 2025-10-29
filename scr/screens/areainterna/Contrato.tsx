import { Box, Image, ScrollView, Text, View, VStack } from "native-base";
import { Checkbox } from 'react-native-paper';
import { ButtonText } from "../../components/ButtonText";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { DadosUser } from "../../services/DadosUser";

import ConfigsPadrao from "../../api/ConfigsPadrao";
import { Alert } from "react-native";

const configspadrao = new ConfigsPadrao();

export function Contrato(){
    const configspadrao = new ConfigsPadrao();
    const navigation = useNavigation();
    const dadosUser = new DadosUser();

    const img = require('../../assets/logocfclegal.jpeg');
    const [checked, setChecked] = useState(false);
    const [contrato, setContrato] = useState("");
    const [loading, setloading] = useState(false);

    /**
     * Contrato desenvolvimento - início 26 de agosto 15:58 
     */
    /*let contrato = getContrato(dadosUser.getIduser());
    console.log(contrato["nome"])*/
    async function getContrato(iduser: string){
        var dadosRecive;
        const dados = { usuario: iduser , acao: "get_dados"}
        const json = JSON.stringify(dados);
        var url = configspadrao.getUrlMain()+"/webservice/contratos/get-dados/";
        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cookie": "PHPSESSID=kh8m2jtoc134leg3fck54mvuc9",
                Accept: "application/json",
            },
            body: json,
        })
        .then((response) => response.json())
        .then((responseJson) => {
            dadosRecive = responseJson;
        })
        .catch((error) => {
            console.log('Error Contrato: ' + error);
        });

        setContrato(dadosRecive["texto"]);

    }


    useEffect(() => {
        getContrato(dadosUser.getIduser());
    },[])

    function handlePressConcordo(){
        if(checked){
            dadosUser.setAcesso(1);
            _getAccept(dadosUser.getIduser());
            navigation.goBack();
            navigation.navigate('homeinterna');
        }else{
            console.log("Aceite os termos")
            Alert.alert("Termos","Aceite os termos");
        }
    }
    async function _getAccept(id_user){
        return new Promise((resolve, reject) => {
          const user = { usuario: id_user, acao: "aceite" };
    
          fetch(configspadrao.getUrlMain()+"/webservice/contratos/aceite/",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(user),
            }
          )
            .then((response) => response.json())
            .then((result) => {
              resolve(result);
            })
            .catch((error) => {
              //Alert.alert(error);
              reject(error);
            });
        });
      };
    return(
        <VStack flex={1} bg="primary.600">
            <ScrollView>
                <VStack>
                    <Box pt={10}>
                        <View w="full" h={255} alignItems="center">
                            <Image w={205} h={205} alt="logocfclegal" source={img}/>
                        </View>
                    </Box>
                    <Box>{/* Text do contrato */}

                    </Box>
                    <Box padding={10}>{/* Btn aceitar */}
                        <Text>{contrato}</Text>
                    </Box>
                    <Box alignItems={"center"} flexDirection="row" p={5}>
                        <Checkbox
                            color="#054ABF"
                            status={checked ? 'checked' : 'unchecked'} 
                            onPress={() => { setChecked(!checked);}}>
                        </Checkbox>
                        <Text>Li e aceito os termos do contrato</Text>
                    </Box>
                    <Box paddingBottom={200} pt={10}>
                        <ButtonText onPress={handlePressConcordo} title="CONCORDO"></ButtonText>
                    </Box>
                </VStack>
            </ScrollView>
            
        </VStack>
    );

}