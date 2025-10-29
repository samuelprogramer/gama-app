import { Text, View, VStack, Pressable} from "native-base";

export type ZonaProps = {
    id: string;
    nome: string;
    bairro: string;
}

type Props =  {
    data: ZonaProps;
}

export function ZonaCFC({data, ...rest}){

    return(
        <Pressable {...rest}>
            <View m={1}>
                <VStack flex={1} p={4}>
                    <Text color={"#FFFFFF"} fontSize={18} >{data.nome}</Text>
                    <Text color={"#e3e3e3"} fontSize={14}>{data.bairro}</Text>
                </VStack>
            </View>
        </Pressable>
    );

}