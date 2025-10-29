import { View, Text, useTheme, VStack, HStack, IconButton, Box } from "native-base";
import { ArrowLeft, CaretRight } from "phosphor-react-native";

type props = {
    dia: string;
    mes: string;
    ano: string;
    hora: string;
    tipo: string;
    instrutor: string;
    posicao: string;
    datainclusao: string;

}

export function CardAulas({dia, mes, ano, hora, tipo, instrutor, posicao, datainclusao, ...rest}:props){
    const { colors } = useTheme();
    return(
        <HStack margin={1} shadow={10} borderRadius={10} bg={"gray.50"} padding={5}>
            <View  width={"10%"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                <Box borderRadius={50} width={"10px"} height={"10px"} bg={"#90EE90"}></Box>
            </View>
            <View justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                <Text fontSize={30}>{dia}</Text>
            </View>
            <View width={"50%"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                <VStack>
                    <Text>{mes.toUpperCase()}</Text>
                    <Text>Aula {tipo}</Text>
                    <Text>{instrutor}</Text>
                </VStack>

            </View>
            <View width={"25%"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                <Text bg={"primary.700"} color={"#FFF"} padding={2} borderRadius={15} >{hora}</Text>
            </View>
            <View width={"10%"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                <IconButton
                    icon={<CaretRight color={colors.primary[700]} size={30}/>}
                    {...rest}
                />
            </View>

        </HStack>
        
    );
}

/*
<HStack margin={1} shadow={10} borderRadius={10} bg={"gray.50"} padding={5}>
            
            <VStack flex={1}>
                <Text>{dia+"/"+mes+"/"+ano}</Text>
                <Text fontSize={10}>Tipo</Text>
                <Text>{tipo}</Text>
                <Text fontSize={10}>Instrutor</Text>
                <Text >{instrutor}</Text>
                <Text color={"#808080"} fontSize={10}>Dia do agendamento {datainclusao}</Text>
            </VStack>
            <VStack alignContent={"center"}>
                {
                    posicao=="cancelado"? 
                    <View  borderRadius={20} bg={"red.600"}>
                        <Text color={"white"} padding={2}>{posicao}</Text>
                    </View> 
                    :
                    posicao=="ativo"?
                        <View  borderRadius={20} bg={"green.700"}>
                            <Text color={"white"} fontSize={20} padding={2}>{hora}</Text>
                        </View>
                    :
                        <View  borderRadius={20} bg={"primary.700"}>
                            <Text color={"white"} padding={2}>{posicao}</Text>
                        </View>
                }
            </VStack>

            
            
            <IconButton
                    icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                    {...rest}
                />

            
        </HStack>
*/