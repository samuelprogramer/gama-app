import { Linking } from "react-native";

export class OpenLink{

    async openLink(url: string) {
        await Linking.canOpenURL(url);
        Linking.openURL(url);
    }

}