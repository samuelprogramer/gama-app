import { HStack, View, Text, VStack } from "native-base";
import { Location } from '../services/Location';

export function AutoOnMap({lat, long, nome, endereco}){
    var location = new Location();

    function getDistanceFromLatLonInKm(position1, position2) {
        "use strict";
        var deg2rad = function (deg) { return deg * (Math.PI / 180); },
            R = 6371,
            dLat = deg2rad(position2.lat - position1.lat),
            dLng = deg2rad(position2.lng - position1.lng),
            a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
                + Math.cos(deg2rad(position1.lat))
                * Math.cos(deg2rad(position1.lat))
                * Math.sin(dLng / 2) * Math.sin(dLng / 2),
            c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return ((R * c).toFixed(2));
    }

    var distancia = getDistanceFromLatLonInKm({lat: location.getLatitude(), lng: location.getLongitude()}, {lat: lat, lng: long})

    return (
        <HStack borderRadius={10} shadow={2} m={1} bg="primary.700">
            <View w={"40%"} alignItems="center" justifyContent="center" p={3}>
                <Text w={"100%"} textAlign={"center"} bg="primary.600" color={"primary.500"} p={2} borderRadius={10}>{distancia} Km</Text>
            </View>
            <VStack w={"60%"}  alignContent={"center"} justifyContent="center">
                <Text color={"secondary.600"}>{nome}</Text>
                <Text fontSize={12} marginRight={"10%"} color={"gray.200"}>{endereco}</Text>
            </VStack>
        </HStack>
    );
}
