import { VStack, Box, ScrollView, Text, FlatList, View, HStack, IconButton, useTheme, Image, AspectRatio, Center, Stack, Heading, Input, Icon, Spinner} from "native-base";
import { useEffect, useState } from "react";
import { AutoOnMap } from "../components/AutoOnMap";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { Marker } from "react-native-maps";
import MapAutoEscolas from "../api/MapAutoescolas";
import { Location } from '../services/Location';
import { Loading } from '../components/Loading';
import { useNavigation } from "@react-navigation/native";
import { DadosEscolasMapa } from "../services/DadosEscolasMapa";
import { Pressable, TextInput, StatusBar, Linking, Platform, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { Ops } from "../components/Ops";
import { ArrowLeft, MagnifyingGlass } from "phosphor-react-native";
import { ButtonText } from "../components/ButtonText";
import { Parceiros } from "../api/Parceiros";
import { DadosNavegacaoEscola } from "../services/DadosNavegacaoEscola";
import React from "react";


var map = new MapAutoEscolas();

var numeroWTS = "";

export function MapsFrame(){

  const {colors} = useTheme();
  var dadosescolasmapa = new DadosEscolasMapa();
  var dadosNavegacao = new DadosNavegacaoEscola();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  const [marksMap, setMarksMap] = useState([]);
  const [marksMapBkp, setMarksMapBkp] = useState([]);
  const [marksMapProximo, setMarksMapProximo] = useState([]);
  
  const [loadfind, setloadfind] = useState(false);
  const [viewMenu, setViewMenu] = useState(false);
  const [markselected, setmarkselected] = useState([]);
  const [temContato, setTemContato]= useState(false);

  const [loading, setLoading] = useState(true);

  // Para termos acesso aos contatos
  var parceiros = new Parceiros();

  var location = new Location();
  const [locationLat, setLocationLat] = useState(location.getLatitude());
  const [locationLon, setLocationLon] = useState(location.getLongitude());
  /**
   * trazer as informações de marcações da api
   */
  async function pegarmapa(){
    await location.getGetLocationNaw();
    locationget();
    console.log('GPS:',location.getLatitude(), location.getLongitude());
    var marks = await map.getMarcadoresMap('AUTOESCOLAS', location.getLatitude(), location.getLongitude());
    setMarksMap(marks);
    setMarksMapBkp(marks);
    dadosescolasmapa.setMarksMap(marks);
    setIsLoading(false);
    locationget();
  }

  async function locationget() {
    setTimeout(()=>{
      location.getGetLocationNaw();
      
      if((locationLat!=location.getLatitude()) && (locationLon!=location.getLongitude())){
        setLocationLat(location.getLatitude());
        setLocationLon(location.getLongitude());
      }
      locationget();
    },5000);
    
  }


  /**
   * Esperando concerto da api
   * @param listaDistante 
   * @param listaProxima 
   */
  function gerarListaProximoDistante(listaDistante, listaProxima){
    var maplist = [];
    var herdle_prox = {// Codigo desativo por motivos visuals de cliente
      sigla:"herdle",
      nome:"Proximos",
    }
    var herdle_dist = {// Codigo desativo por motivos visuals de cliente
      sigla:"herdle",
      nome:"Distantes",
    }
    //maplist.push(herdle_prox);
    for(var x1=0;x1<listaProxima.length;x1++) {
      maplist.push(listaProxima[x1]);
    }
    //maplist.push(herdle_dist);
    for(var x1=0;x1<listaDistante.length;x1++) {
      maplist.push(listaDistante[x1]);
    }
    //console.log(maplist);
    setMarksMap(maplist);
    
    
  }

  function handleMostrarTodos(){
    
    navigation.navigate('regiaoselect');
  }

  useEffect(() => {
    setTimeout( function() {
        pegarmapa(); 
    }, 100 );
  },[]);

  // Espera carregar as informações em tela
  if(isLoading) {
    return <Loading/>;
  }
  
  /**
   * Abrindo escola selecionada no map
   */
  function handleOpenEscola(index){
    // var cfc = dadosescolasmapa.getMarksMap(index);
    // dadosescolasmapa.setMarkToUse(cfc);
    // Abrindo detalhes da escola
    //openEscola(index);
    openMenu(index);
  }

  var index_open_cfc="-1";// index para dois click na auto escola no mapa
  function handleOpenEscolaMap(index: string){
    if(index_open_cfc==index){
      openMenu(index);
      //openEscola(index);
    }else{
      index_open_cfc = index;
    }
   
  }

  async function OpenMenuCFC(cfcopen){
    console.log(cfcopen);
    try{
      setloadfind(true);
      setmarkselected(cfcopen);
      PegarContatoEscola(cfcopen);
      setTemContato(false);
      /*if(cfcopen.whatsapp==""){
        numeroWTS = "";
        console.log("Sem contato");
        setTemContato(false);
      }else{
        var contato = cfcopen.whatsapp;
        if(!contato.includes("+55")){
          contato = "+55"+contato;
        }
        numeroWTS = contato;
        console.log("Contato: "+ numeroWTS);
        setTemContato(true);
      }*/
      setTimeout( function() {
        console.log("Abrindo Menu");
        setViewMenu(true)
        setloadfind(false);
      }, 100 );

    }catch(e){
      console.log("Error");
      setloadfind(false);
    }
  }
  var escolaSelected = "";
  var indexSelected = "";
  async function openMenu(index){
    //console.log(index);
    setloadfind(true);
    try{
      var getidlocal = index;
      /*for(var x=0;x<marksMap.length;x++){
        if(marksMap[x].id==index){
          getidlocal = x;
          break;
        }
      }*/

      setmarkselected(marksMap[getidlocal]);
      PegarContatoEscola(marksMap[getidlocal]);
      setTimeout( function() {
        console.log("Abrindo Menu");
        setViewMenu(true)
        setloadfind(false);
      }, 100 );
      
    
      
    }catch(e){
      setloadfind(false);
    }
    
  }

  async function PegarContatoEscola(mark){
    /*console.log("Vendo Contato");
    setTemContato(false);
    numeroWTS = "";
    await parceiros.getParceiros();
    var cfcencontrada = parceiros.findCfcId(mark.id);
    // Para ser usado internamente na navegação do usuario
    dadosNavegacao.setEscolasDadosMap_interno(cfcencontrada);
    if(cfcencontrada.whatsapp!=""){
      var contato = cfcencontrada.whatsapp;
      if(!contato.includes("+55")){
        contato = "+55"+contato;
      }
      numeroWTS = contato;
      console.log("Contato: "+ numeroWTS);
      setTemContato(true);
    }else{
      numeroWTS = "";
      console.log("Sem contato");
    }*/
    setTemContato(false);
    if(mark.whatsapp==""){
      numeroWTS = "";
      console.log("Sem contato");
      
    }else{
      var contato = mark.whatsapp;
      if(!contato.includes("+55")){
        contato = "+55"+contato;
      }
      numeroWTS = contato;
      console.log("Contato: "+ numeroWTS);
      setTemContato(true);
    }
  }
  // Pagina inicial
  function openEscola(){

    dadosNavegacao.setLatitude(markselected.latitude);
    dadosNavegacao.setLongitude(markselected.longitude);
    dadosNavegacao.setEscolasDadosMap(markselected);

    //
    setViewMenu(false);
    console.log("Abrindo inicial");
    console.log(markselected);
    navigation.navigate('escolas', markselected.id);
  }
  function openMap(){
    dadosNavegacao.setLatitude(markselected.latitude);
    dadosNavegacao.setLongitude(markselected.longitude);
    dadosNavegacao.setEscolasDadosMap(markselected);
    // openGps();
    ComoChegarDestino();
    setViewMenu(false);
  
  }
  function openGps() {
    var scheme = Platform.OS === 'ios' ? 'maps' : 'geo';
    var url = scheme+':'+markselected.latitude+','+markselected.longitude+'';
    console.log(url);
    openExternalApp(url)
  }
  
  function openExternalApp(url) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + url);
      }
    });
  }

  function ComoChegarDestino(){
    navigation.navigate('comochegarscreen');
  }

  function openWhatApp(){
    try{
      setViewMenu(false);
      Linking.openURL(`whatsapp://send?phone=${numeroWTS}&text=Estou vindo do CFCLegal`);
    }catch(e){
      
    }
  }

  
  async function find(textfind){
    setloadfind(true);
    function findFind(){
      if(textfind==""){
        setMarksMap(marksMapBkp);
       
      }else{
        var localMarks = [];
        for(var x = 0;x<marksMapBkp.length;x++){
          var item = marksMapBkp[x];
          try{
            if(item.nome.toString().toUpperCase().includes(textfind.toUpperCase().trim())){
              localMarks.push(item);
            }
          }catch(e){}
        }
        setMarksMap(localMarks);
      }
      setloadfind(false);
    }  
    setTimeout(findFind, 500);// Somente para o load aparecer um pouco na tela, efeitos visuais
   
  }
  function fecharMenu(){
    setViewMenu(false);
  }

  
  
  var aux_cont_list = 0;
  try{
    return (
      <View flex={1} bg="primary.600">
          <View>
            <Text></Text>
            <Text></Text>
            <Box paddingLeft={3} paddingRight={3} alignItems="center">
              <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700"
            }} _web={{
              shadow: 2,
              borderWidth: 0
            }} _light={{
              backgroundColor: "gray.50"
            }}>
                <Box>
                  <AspectRatio w="100%" ratio={16 / 9}>
                  <MapView
                      style={{flex: 1}}
                      showsUserLocation={true}
                      //provider={PROVIDER_GOOGLE}
                      initialRegion={{
                        latitude: locationLat, // preciso trazer os valores do Location.tsx
                        longitude: locationLon, // preciso trazer os valores do Location.tsx
                        latitudeDelta: 0.2122,
                        longitudeDelta: 0.2121,
                      }}>
                      {
                        // Montando mapa na tela
                        marksMap.map((mark) => {
                          try{
                            if(mark.sigla!="herdle"){
                              return (
                                <Marker
                                onPress={()=>{handleOpenEscolaMap(mark.id)}}
                                coordinate={{
                                  latitude: Number(mark.latitude), 
                                  longitude: Number(mark.longitude)}
                                } 
                                title={mark.nome}
                                description={mark.endereco}>
                                </Marker>
                              );
                            }else{
                              return (<></>);
                            }
                          }catch(e){
                            return (
                              <Marker
                              coordinate={{
                                latitude: 0, 
                                longitude: 0}
                              }>
                              </Marker>
                            );
                          }
                          
                        
                        })
                      }
                      
                  </MapView>
                  </AspectRatio>
                </Box>
                
              </Box>
            </Box>
                  <View alignItems="center">
                    <HStack alignItems="center">
                    <Input
                    margin={5}
                    style={{
                        height: 40,
                        width: "80%",
                    }} InputLeftElement={<Icon as={<MagnifyingGlass name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Procure sua Autoescola"
                    onChangeText={(textfind)=>{find(textfind)}} />
                  
                    </HStack>
                  </View>
                  {(loadfind&&!viewMenu)? <Spinner size={80} color="primary.700"></Spinner>:
                    <View>
                      {marksMap.length==0? <View alignItems={"center"} padding={20}><Text color={"primary.700"} fontSize={14}>CFC não cadastrada</Text></View>:
                        <ScrollView width={"100%"} height={"72%"}>
                          {
                            marksMap.map((mark) => {
                                try {
                                  const aux = aux_cont_list;
                                  aux_cont_list++;
                                  if(mark.sigla=="herdle"){
                                    return (
                                      <View>
                                        <View padding={5}>
                                          <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={18}>{mark.nome}</Text>
                        
                                        </View>
                                        <View bg={"primary.700"} width={"100%"} height={"1px"}>
                        
                                        </View>
                                      </View>
                                    );
                                  }else{
                                    
                                    return (
                                      <Pressable onPress={()=>{OpenMenuCFC(mark)}}>
                                        <AutoOnMap lat={mark.latitude} long={mark.longitude} nome={mark.nome} endereco={mark.endereco}  />
                                      </Pressable>
                                    );
                                    
                                  }
                                  
                                }catch (e) {
                                  return(<View></View>);
                                }
                                
                            })
                          }
                          <View height={300}>

                          </View>
                        </ScrollView>

                        
                      }
                     
                    </View>
                  }
              
              {/* Mostrar regiões */}
              {/* <Box h="6%" flexDirection="row-reverse" bg="primary.600">
                <ButtonText title="Mostrar Todas" onPress={handleMostrarTodos}/>
              </Box> */}
          </View>
          {viewMenu?
            <View bg={"#FFFC"} w={"100%"} h={"100%"} position="absolute">
              <VStack borderRadius={10} w={"80%"} bg="primary.600" mt={"40%"} ml={"10%"}  alignItems={"center"} 
              shadow="3">
                  <HStack w={"100%"} alignItems={"center"} padding={5}>
                    <View alignItems={"flex-start"} >
                        <IconButton
                            icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                            onPress={fecharMenu} 
                        /> 
                    </View>
                    <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={12} w={"70%"}>{markselected.nome}</Text>
                  </HStack>
                  
                  <ButtonText title="Pagina inicial" onPress={openEscola} w={"80%"} mt={5}></ButtonText>
                  <ButtonText title="Como chegar" onPress={openMap} w={"80%"} mt={2}></ButtonText>
                  {numeroWTS!=""?
                  <ButtonText title="WhatsApp" onPress={openWhatApp}w={"80%"} mt={2} mb={10}></ButtonText>
                  :<View p={10}></View>}
              </VStack>
            </View> 
            :<View></View>}
      </View>
    );
  }catch (error){
    console.log("Erro Mapsframe catch tela: " + error);
    return (
      <Ops/>
    );
  }
  
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#800000',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});