import { HStack, Box,Text, VStack, Image, 
    View, ScrollView, useTheme, IconButton, AspectRatio} from "native-base";
import { useNavigation } from "@react-navigation/native";
import {ArrowLeft, User, MapPinLine, PhoneCall, WhatsappLogo} from 'phosphor-react-native';
import { Linking, Platform, Pressable } from "react-native";

/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * DESCONTINUADO
 * 
 * 
 */

export function ViewDadosPremiacao(){
    const navigation = useNavigation();
    const {colors} = useTheme();
    


    function handleBakc(){
        navigation.goBack();
    }
      
    return(
        <VStack flex={1} bg="primary.600">
                
            <ScrollView showsVerticalScrollIndicator={false}>
            <HStack pt={10} alignItems={"center"}>
                <View alignItems={"flex-start"} >
                    <IconButton
                        icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                        onPress={handleBakc} 
                    /> 
                </View>
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Premiação</Text>
            </HStack>
            </ScrollView>
        </VStack>
    );
}