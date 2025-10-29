import { VStack, Center, View, Text, Icon, Button, IButtonProps, useTheme, HStack, Pressable } from "native-base";
import { IconProps } from "phosphor-react-native";

type props = IButtonProps &{
    title: string;
    icon: React.ElementType<IconProps>;
}

export function CardCursos({title, icon: Icon, ...rest}:props){
    const { colors } = useTheme();
    return(
        <Pressable
        bg="primary.700"
        rounded="md" 
        m={3}
        flex={1}
        padding={8}
        shadow={3}
        _pressed={{bg: "primary.500"}}
        {...rest}
        >        
            <HStack flex={1} alignItems="center">
                <View paddingRight={5}>
                    <Icon color={colors.white}/>
                </View>
                <Text color="white">{title}</Text>
            </HStack>
            
        </Pressable>
    );
}