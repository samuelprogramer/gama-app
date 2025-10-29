
import { Text, View, HStack, Pressable, Icon, IconButton, useTheme, IPressableProps} from "native-base";
import { YoutubeLogo } from "phosphor-react-native";

type Props = IPressableProps & {
    title: string;
}

export function ItemAulas({title,...rest}:Props){

    const {colors} = useTheme();

    return(
        <Pressable {...rest}>
            <View m={1}>
                <HStack alignItems={"center"}>
                    <IconButton icon={<YoutubeLogo color={colors.red[500]} size={30}/>}></IconButton>
                    <Text color={"#000"} fontSize={15} >{title}</Text>
                </HStack>
            </View>
        </Pressable>
    );

}




