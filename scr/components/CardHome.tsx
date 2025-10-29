import { VStack, Center, View, Text, Icon, Button, IButtonProps, useTheme } from "native-base";
import { IconProps } from "phosphor-react-native";

type props = IButtonProps &{
    title: string;
    icon: React.ElementType<IconProps>;
}

export function CardHome({title, icon: Icon, ...rest}:props){
    const { colors } = useTheme();
    return(
        <Button h={90} w={"70%"} 
        bg="primary.700"
        rounded="md" 
        m={3}
        alignItems="center"
        shadow={2}
        _pressed={{bg: "primary.500"}}
        {...rest}
        >        
            <View 
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center">
                <Icon color={colors.white}/>
                <Text color="white">{title}</Text>
            </View>
        </Button>
    );
}