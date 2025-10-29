import { Location } from "./Location";


export class ContDistanceCords{
    // Minha localização                                                    Localização a calcular
    //({lat: location.getLatitude(), lng: location.getLongitude()}, {lat: lat, lng: long})
    // Retorna a distancia entre os dois pontos
    CalculateLatLonInKm(position1, position2) {
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

    /**
     * Para calcular quem esta mais proximo de nos pela distancia
     * 
     * "latitude": "-9.39955366719306",
     * "longitude": " -40.4939283585184",
     * @param listMaps 
     */
    getProximosdeCords(listMaps){
        var location = new Location();
        var locaisproximos = [];

        // Todas as CFCs proximas de nos em um raio de 10km
        for(var i = 0; i < listMaps.length; i++){
            
            if(parseFloat(this.CalculateLatLonInKm({lat: location.getLatitude(), lng: location.getLongitude()}, {lat: listMaps[i].latitude, lng: listMaps[i].longitude}))
                <300){
                    locaisproximos.push(listMaps[i]);
            }
        }
        return locaisproximos;

    }
    ordenarDistance(listMaps){
        var location = new Location();
        var locaisproximos = [];

        // Todas as CFCs proximas de nos em um raio de 10km
        for(var i = 0; i < listMaps.length; i++){
            var distance = this.CalculateLatLonInKm({lat: location.getLatitude(), lng: location.getLongitude()}, {lat: listMaps[i].latitude, lng: listMaps[i].longitude})
            listMaps[i].distance = distance;
            locaisproximos.push(listMaps[i]);
        }

        // Ajustando todas as CFC para ficar em ordem de distancia
        locaisproximos.sort(function(a,b){
            return parseInt(a.distance) - parseInt(b.distance);
        });
        var locais = [];
        console.log("LIST");
        for(var i = listMaps.length; i > 0; i--){
            locais.push(locaisproximos[i]);
        }

        

        return locaisproximos;

    }



}


