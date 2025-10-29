import React, { useState } from "react";
import {VStack, Box, View, Text, IconButton, FlatList} from "native-base";
import { Alert, Modal, StyleSheet, Pressable} from "react-native";

import { RegiaoCard } from "../components/RegiaoCard";
import {ArrowLeft, MapPin} from 'phosphor-react-native';
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "native-base";

import { DadosEscolasMapa } from "../services/DadosEscolasMapa";
import { ZonaCFC } from "../components/ZonaCFC";

export function RegiaoSelect(){    
    var dadosescolasmapa = new DadosEscolasMapa();
    const navigation = useNavigation();
    const {colors} = useTheme();

    const [modalVisible, setModalVisible] = useState(false);
    const [autoescolas, setAutoescolas] = useState([]);

    // Voltando
    function handleBakc(){
        navigation.goBack();
    }
    const zonas = {
        norte: 'norte',
        sul: 'sul',
        leste: 'leste',
        oeste: 'oeste',
        centro: 'centro'
        
    };

    /**
     * 
     * @param click_zona 
     */
    function handleOpenZona(click_zona){
        var marksZona = []
        console.log("Abrindo Escola na zona: "+click_zona);
        const zona = click_zona.toString();
        if(zona == "centro"){
            //setAutoescolas(dadosescolasmapa.find(zona.toUpperCase()));
            marksZona = dadosescolasmapa.find(zona.toUpperCase());
        }else{
            marksZona = dadosescolasmapa.find("ZONA "+zona.toUpperCase());
            //setAutoescolas(dadosescolasmapa.find("ZONA "+zona.toUpperCase()));
        }
        setAutoescolas(marksZona)
        console.log(autoescolas[0])
        setModalVisible(true)
        //navigation.navigate('escolas',{idzona: zona,idescola: '0'})
    }

    function handleZonaDetails(id: string){
        console.log("Item clicado: " + id)
        navigation.navigate('detalhesescola');
        setModalVisible(!modalVisible);
    }
    
    /**
     * Exibir os valores no MODEL [] 
     * Melhor estilo do MODEL (remover do frame) []
     */
    return (
        <VStack flex={1} bg="primary.600">

            {/* Exibição de regiao ao clicar */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 22
                    }}>
                    <View style={{
                    margin: 15,
                    backgroundColor: "rgba(5,72,189, 0.9)",
                    borderRadius: 10,
                    padding: 10,
                    flex: 1,
                    alignItems: "center",
                    shadowColor: "#000000",
                }}>

                    <FlatList
                        data={autoescolas}
                        keyExtractor={item => item.id}
                        renderItem={({item})=><ZonaCFC data={item} onPress={()=> handleZonaDetails(item.id)}/>}
                        showsVerticalScrollIndicator={false}
                    />

                {/* {
                  // Montando mapa na tela
                  autoescolas.map(({nome, regiao}) => {
                    return (
                        
                      <Text style={{
                        color: "#FFFFFF",
                        marginTop: 8,
                        alignItems: "center"
                      }}>{nome}</Text>
                    );
                  })
                } */}

                    <Pressable
                    style={{
                    backgroundColor: "#FFFFFF",
                        borderRadius: 20,
                        padding: 16,
                        width: 300,
                        elevation: 2,
                        marginTop: 8
                        }}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={{color: "#",
                    fontWeight: "bold",
                    textAlign: "center"}}
                    onPress={() => setModalVisible(!modalVisible)}>Fechar</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
            
            <VStack pt={10}>                
                <View>
                    <View alignItems={"flex-start"} >
                        <IconButton
                            icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                            onPress={handleBakc} 
                        /> 
                    </View>
                </View>
                <Box alignItems={"center"}>
                    <VStack>
                        <Box alignItems={"center"}>
                            <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Selecione sua região</Text>
                            <Text fontFamily={"Roboto_700Bold"} color={"primary.500"} fontSize={18}>Autoescolas</Text>
                        </Box>
                       
                    
                        <RegiaoCard title="Zona Norte" icon={MapPin} onPress={() => handleOpenZona(zonas.norte)}/>
                        <RegiaoCard title="Zona Sul" icon={MapPin} onPress={() => handleOpenZona(zonas.sul)}/>
                        <RegiaoCard title="Zona Leste" icon={MapPin} onPress={() => handleOpenZona(zonas.leste)}/>
                        <RegiaoCard title="Zona Oeste" icon={MapPin} onPress={() => handleOpenZona(zonas.oeste)}/>
                        <RegiaoCard title="Centro" icon={MapPin} onPress={() => handleOpenZona(zonas.centro)}/>
                    </VStack>
                </Box>
            </VStack>
        </VStack>
    );

}

const styles = StyleSheet.create({
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });