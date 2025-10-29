import { VStack, Center, View, Pressable, Text, Icon, Button, IButtonProps, useTheme, HStack, Checkbox } from "native-base";
import { IconProps } from "phosphor-react-native";

type props = IButtonProps &{
    title: string;
}

export function CardHorario({title, ...rest}:props){
    const { colors } = useTheme();
    return(
        <Pressable
        w={"100%"}
        h={50}
        marginTop={2}
        shadow={2}
        bg={"primary.700"}
        _pressed={{bg: "primary.500"}}
        >       
            <VStack flex={1} padding={2}>
                <Checkbox width={"100%"} height={"100%"} colorScheme="info" {...rest}><Text color={"white"}>{title}</Text></Checkbox>
              
            </VStack>
                
        </Pressable>
    );
}