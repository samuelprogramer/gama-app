import GeoLocationLocal from 'react-native-geolocation-service';
import { PermissionsAndroid, Platform } from "react-native";
import Geolocation from '@react-native-community/geolocation';
//Araci -11.337954 e -38.9621852
//var lat = -8;
//var lon = -36;

export class Location{
  

  public static lat = 0;
  public static lon = 0;


  async setPermitionLocation(){
    console.log("Requisitando permição para localização");
    try {
      if(Platform.OS === 'ios'){
        await Geolocation.requestAuthorization();
      }else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Para continuar é necessário autorizar o uso da localização",
            message:
              "Sua localização será usada para encontrar as autoescolas perto de você.",
            buttonNegative: "Negar",
            buttonPositive: "Permitir"
          }
        );
        console.log("granted: "+granted);
      }
    } catch (err) {
      console.warn(err);
    }
    this.getGetLocationNaw();
  }

  /**
   * Pegando a localização atual do usuario
   */
  async getGetLocationNaw(){   
    GeoLocationLocal.getCurrentPosition(
        (position) => {
          Location.lat = position.coords.latitude
          Location.lon = position.coords.longitude

        },
        (error) => {
          console.log(error);
          return null;
        },
        {
          enableHighAccuracy: true, // Whether to use high accuracy mode or not
          timeout: 15000, // Request timeout
          maximumAge: 10000 // How long previous location will be cached
        }
      )
  }

  getLatitude(){
    return Location.lat;
  }

  getLongitude(){
    return Location.lon;
  }

}
