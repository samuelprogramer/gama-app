import { Button, IButtonProps, Text } from "native-base";

type props = IButtonProps & {
    title: string;
}

export function ButtonText({title, ...rest}: props){

    return(
        <Button bg={"primary.700"} borderRadius={50} shadow={2} _pressed={{bg: "primary.600"}} {...rest}>
            <Text color={"#FFF"}>{title}</Text>
        </Button>
    );

}