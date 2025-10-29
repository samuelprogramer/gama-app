import { VStack, Center, View, Text, Icon, Button, IButtonProps, useTheme } from "native-base";
import { IconProps } from "phosphor-react-native";

type props = IButtonProps &{
    title: string;
    icon: React.ElementType<IconProps>;
}

export function RegiaoCard({title, icon: Icon, ...rest}:props){
    const { colors } = useTheme();
    return(
        <Button h={50} w={300} 
        bg="primary.600"
        borderColor={"primary.700"}
        borderWidth={3}
        rounded="md"
        margin={3}
        shadow={3}
        _pressed={{bg: "button.click"}}

        {...rest}
        >        
            <View 
            flexDirection="row"
            alignItems={"flex-start"}>
                <Icon color={colors.primary[700]}/>
                <Text fontSize={14} w={"80%"} fontFamily={"Roboto_700Bold"} color="primary.700">{title}</Text>
            </View>
        </Button>
    );
}