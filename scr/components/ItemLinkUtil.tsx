
import { Text, View, HStack, Pressable, Icon, IconButton, useTheme, IPressableProps} from "native-base";
import { Link } from "phosphor-react-native";

type Props = IPressableProps & {
    title: string;
    site: string;
}

export function ItemLinkUtil({title, site,...rest}:Props){

    const {colors} = useTheme();

    return(
        <Pressable {...rest}>
            <View m={1}>
                <HStack alignItems={"center"}>
                    <IconButton icon={<Link color={colors.red[500]} size={30}/>}></IconButton>
                    <View>
                    <Text color={"#000"} fontSize={15} >{title}</Text>
                    <Text color={"#808080"} fontSize={12} >{site}</Text>
                    </View>
                </HStack>
            </View>
        </Pressable>
    );

}




