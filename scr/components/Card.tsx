import { VStack, Center, View, Text, Icon, Button, IButtonProps, useTheme } from "native-base";
import { IconProps } from "phosphor-react-native";
import React from "react";

type props = IButtonProps &{
    title: string;
    icon: React.ElementType<IconProps>;
}

export function Card({title, disabled,icon: Icon, ...rest}:props){
    const { colors } = useTheme();
    return(
        <Button h={120} w={120} 
        bg="primary.700"
        rounded="md" 
        m={3}
        alignItems="center"
        shadow={3}
        _pressed={{bg: "primary.500"}}
        {...rest}
        >        
            <View 
                flex={1}
                flexDirection="column"
                justifyContent="center"
                alignItems="center">
                <Icon color={colors.white}/>
                <View alignItems={"center"}>
                    <Text alignItems={"center"} color="white">{title}</Text>
                </View>
            </View>
        </Button>
    );
}