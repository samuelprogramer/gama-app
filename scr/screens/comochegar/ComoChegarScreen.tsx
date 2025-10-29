import { HStack, Box,Text, VStack, Image, 
    View, ScrollView, useTheme, IconButton} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { Location } from "../../services/Location";
import MapView, { Marker,PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useEffect, useState } from "react";
import { DadosNavegacaoEscola } from "../../services/DadosNavegacaoEscola";

import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location';
import { Loading } from "../../components/Loading";

import { 
    Content,
    Balon,
    ImgUser,
    ImgTriangle
} from './style.js';

export function ComoChegarScreen(){

    var dadosnavegacao = new DadosNavegacaoEscola();

    const APIKEY = "AIzaSyCaStUYcGnOi04RwkKyrN0tMVIW5MXmt8A";
    const navigation = useNavigation();
    var location = new Location();
    const [destinationLocation, setDestinationLocation] = useState(null);
    const [loadmap, setLoadMap] = useState(true);
    const [cordsn, setCords] = useState([
        {
            id:0,
            latitude: parseFloat(location.getLatitude()+""),
            longitude: parseFloat(location.getLongitude()+""),
        },
        {
            id:1,
            latitude: 0,
            longitude: 0,
        }
    ]);

    useEffect(()=>{
        setCords([
            {  
                id: 0,
                latitude: parseFloat(location.getLatitude()+""),
                longitude: parseFloat(location.getLongitude()+""),
            },
            {
                id: 1,
                latitude: parseFloat(dadosnavegacao.getLatitude()),
                longitude: parseFloat(dadosnavegacao.getLongitude()),
            }
        ]);
        setLoadMap(false);
    }, []);

    if(loadmap) return <Loading/>
    // aqui pegar a logo do cfc caso exista e mostrar no mapa
    //if(dadosnavegacao.get)
    const img = require('../../assets/logocfclegal.jpeg');
    const imgpino = require('../../assets/pino2_perfeito.png');
    
    try{
        return(
            <View flex={1} height={"100%"} width={"100%"}>
                <MapView
                    style={{flex: 1}} 
                    showsUserLocation={true}
                    showsMyLocationButton={false}
                    zoomControlEnabled={true}
                    loadingEnabled={true}
                    loadingBackgroundColor={'#fff'}
                    toolbarEnabled={false}
                    //provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: location.getLatitude(), // preciso trazer os valores do Location.tsx
                        longitude: location.getLongitude(), // preciso trazer os valores do Location.tsx
                        latitudeDelta: 0.2122,
                        longitudeDelta: 0.2121,
                    }}>
                        {cordsn.map((cordsn) =>{
                            return <Marker coordinate={cordsn} >
                                {cordsn.id==1&&
                                    <View >
                                        <View >
                                            <Image borderRadius={100} w={"70px"} h={"70px"} alt="logocfclegal" source={img}/>
                                        </View>
                                        <View alignItems={"center"}>
                                            <Image borderRadius={100} w={"20px"} h={"20px"} alt="triangulo" source={imgpino}/>
                                        </View>
                                    </View>
                                }
                                    
                                </Marker>}
                            )}
                        <MapViewDirections
                            strokeColor="#4285F4"
                            origin={cordsn[0]}
                            destination={cordsn[cordsn.length-1]}
                            strokeWidth={5}
                            apikey={APIKEY}
                            optimizeWaypoints={true}
                            resetOnChange={false}
                            precision={'high'}
                            >
                      </MapViewDirections>
                </MapView>
    
            </View>        
        );
    }catch(e){
        return <View></View>
    }
    
}