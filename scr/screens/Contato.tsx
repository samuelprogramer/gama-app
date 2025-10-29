import { HStack, Box,Text, VStack, Image, 
    View, ScrollView, useTheme, IconButton, AspectRatio} from "native-base";
import { useNavigation } from "@react-navigation/native";
import {ArrowLeft, User, MapPinLine, PhoneCall, WhatsappLogo} from 'phosphor-react-native';
import { ButtonText } from "../components/ButtonText";
import { Linking, Platform, Pressable } from "react-native";

import Constants from 'expo-constants';

// Endereço
// telefone
// Contato telefone

//https://www.google.com/search?q=sindcfc+pe&sxsrf=ALiCzsYtDeF66s42J5wslIsPyXYaxq7GBw%3A1660398275981&source=hp&ei=w6r3YruFOdTQ1sQPw8Kv8Ac&iflsig=AJiK0e8AAAAAYve40ye0WZvBL_HavtPN4XBGsX09nGlH&gs_ssp=eJzj4tVP1zc0zDJPqbLMis82YLRSMagwT0wytEwzTTM3NTY1tEizMqhITUpNTEo0TTKztEhKsTA18OIqzsxLSU5LVihIBQBquBNg&oq=sindcfc&gs_lcp=Cgdnd3Mtd2l6EAMYAjIHCAAQgAQQCjILCC4QgAQQxwEQrwEyCwguEIAEEMcBEK8BMgQIABAKMgsILhCABBDHARCvATIFCAAQgAQyBAgAEAoyBAgAEAoyBAgAEB4yCAgAEB4QDxAKOgQIIxAnOgsILhCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CwgAEIAEELEDEIMBOggIABCABBCxAzoKCAAQsQMQgwEQQzoOCAAQgAQQsQMQgwEQyQM6BQgAEJIDOgQIABBDOgcIABCxAxBDOg0ILhCABBDHARCvARAKOgcIABCxAxAKOgoILhDHARCvARAKUABY4xJgoCdoAHAAeACAAaUCiAGrC5IBBTAuNC4zmAEAoAEB&sclient=gws-wiz


export function Contato(){
    const navigation = useNavigation();
    const {colors} = useTheme();
    const img = require('../assets/logocfclegal.jpeg');
    const img_back = require('../assets/sindicfcpe.png');
    
    const NumberWts = "+558132246501";
    const msgwts = "Olá achei vocês atraves do aplicativo cfc legal, gostaria de mais informações";
    function handleBakc(){
        navigation.goBack();
    }
    function handleWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=${NumberWts}&text=${msgwts}`);
    }
    function openTell(){
        Linking.openURL(`tel:+558132246501`);
    }

    /**
     * Abrindo localização no mapa
     */
    function openGps() {
        var scheme = Platform.OS === 'ios' ? 'maps' : 'geo';
        var url = scheme+':-8.0323408,-34.941089,21z';
        console.log(url);
        openExternalApp(url)
    }
    // Estamos iginorando a url GEO pois testamos com um link direto e funcionou melhor
    function openExternalApp(url) {
        Linking.canOpenURL(url).then(supported => {
          if (supported) {
            Linking.openURL("https://www.google.com/maps/place/Sindicato/@-8.0323408,-34.941089,21z/data=!4m5!3m4!1s0x7ab19f5f753518f:0xebeaba5b698bd850!8m2!3d-8.0323813!4d-34.9410099?hl=pt-BR");
          } else {
            console.log('Don\'t know how to open URI: ' + url);
          }
        });
    }
      
    return(
        <VStack flex={1} bg="primary.600">
                
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image w={"100%"} h={"230px"} alt="logocfclegal" source={img_back}/>
                <View  position="absolute" pt={10}>
                    <View alignItems={"flex-start"} >
                        <IconButton 
                            icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                            onPress={handleBakc} 
                        /> 
                      
                    </View>
                </View>
                <VStack  pt={"5%"}>
                            <Box alignItems="center" >
                                <Box w={"90%"} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                                }} _web={{
                                shadow: 2,
                                borderWidth: 0
                                }} _light={{
                                backgroundColor: "gray.50"
                                }}>
                                    <HStack >
                                        <IconButton 
                                            icon={<MapPinLine color={colors.primary[700]} size={30} />}
                                        />
                                        <VStack>
                                            <Pressable onPress={openGps}>
                                                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Endereço</Text>
                                                <Text color={"primary.500"} fontSize={20}>R. Lindóia do Norte</Text>
                                                <Text color={"primary.500"} fontSize={18}>130 B</Text>
                                                <Text color={"primary.500"} fontSize={18}>Iputinga, Recife - PE</Text>
                                                <Text color={"primary.500"} fontSize={18}>50800-290</Text>
                                            </Pressable>
                                            
                                        </VStack>
                                    </HStack>
                                </Box>
                            </Box>


                           
                            <Box alignItems="center" marginTop={5}>
                                <Box w={"90%"} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                                }} _web={{
                                shadow: 2,
                                borderWidth: 0
                                }} _light={{
                                backgroundColor: "gray.50"
                                }}>
                                    <HStack>
                                        <IconButton 
                                            icon={<PhoneCall color={colors.primary[700]} size={30} />}
                                        />
                                        <VStack>
                                            <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Telefone</Text>
                                            <Text color={"primary.500"} fontSize={20} onPress={openTell}>(81) 3224-6501</Text>
                                            
                                        </VStack>
                                    </HStack>
                                </Box>
                            </Box>

                            <Box alignItems="center" marginTop={5} >
                                <Box w={"90%"} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                                borderColor: "coolGray.600",
                                backgroundColor: "gray.700"
                                }} _web={{
                                shadow: 2,
                                borderWidth: 0
                                }} _light={{
                                backgroundColor: "gray.50"
                                }}>
                                    <HStack>
                                        <IconButton 
                                            icon={<WhatsappLogo color={colors.primary[700]} size={30} />}
                                        />
                                        <VStack>
                                            <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>WhatsApp</Text>
                                            <Text color={"primary.500"}  onPress={handleWhatsApp} fontSize={20}>+55 81 3224-6501</Text>
                                        </VStack>
                                    </HStack>
                                </Box>
                            </Box>

                        
                        <HStack>
                            
                        </HStack>
                        
                        <ButtonText title="ENTRAR EM CONTATO PELO WHATSAPP"  onPress={handleWhatsApp} mt={10}></ButtonText>
                        
                        
                </VStack>
            </ScrollView>
            <View alignContent={"center"} alignItems={"center"} >
                <Text fontSize={10} color={"#d3d3d3"}>{Constants.manifest.version}</Text>
            </View>
        </VStack>
    );
}