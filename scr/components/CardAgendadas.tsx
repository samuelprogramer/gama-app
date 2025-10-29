import { View, Text, useTheme, VStack, HStack } from "native-base";

type props = {
    title: string;
}

export function CardAgendadas({title, ...rest}:props){
    const { colors } = useTheme();
    return(
        <HStack margin={1} shadow={10} borderRadius={10} bg={"primary.700"} padding={5}>
            <VStack alignItems={"center"} alignContent={"center"}>
                <Text color={"white"} fontSize={40} >07</Text>
            </VStack>
            <VStack flex={1} paddingLeft={5}>
                <Text color={"white"} >Mes</Text>
                <Text color={"white"} >Aula: pratica</Text>
                <Text color={"white"} >Nome Instrutor</Text>
            </VStack>
            <VStack alignContent={"center"}>
                <View  borderRadius={20} bg={"secondary.700"}>
                    <Text color={"white"} padding={2}>11:30</Text>
                </View>
            </VStack>
        </HStack>
    );
}