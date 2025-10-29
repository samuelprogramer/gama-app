import { View, Text, useTheme, VStack, HStack } from "native-base";

type props = {
    curso: string;
    posicao: string;
}

export function CardAulasConcluidas({curso, posicao, ...rest}:props){
    const { colors } = useTheme();
    return(
        <HStack margin={1} shadow={10} borderRadius={10} bg={"primary.700"} padding={5}>
            <VStack flex={1}>
                <Text color={"white"} >{curso}</Text>
                <Text color={"white"} >Habilitacao</Text>
                <Text color={"white"} >Teorico</Text>
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
                            <Text color={"white"} padding={2}>{posicao}</Text>
                        </View>
                    :
                        <View  borderRadius={20} bg={"primary.700"}>
                            <Text color={"white"} padding={2}>{posicao}</Text>
                        </View>
                }
            </VStack>

            
        </HStack>
    );
}