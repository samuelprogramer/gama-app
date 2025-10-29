import { HStack, Box,Text, VStack, Image, 
    View, ScrollView, useTheme, IconButton} from "native-base";
import { useNavigation } from "@react-navigation/native";
import {ArrowLeft, User, MapPinLine, PhoneCall, WhatsappLogo} from 'phosphor-react-native';
import { ButtonText } from "../../components/ButtonText";
import { Linking } from "react-native";
import { DadosEscolasMapa } from "../../services/DadosEscolasMapa";
import { DadosUser } from "../../services/DadosUser";
import { Parceiros } from "../../api/Parceiros";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";

// Endereço
// telefone
// Contato telefone

//https://www.google.com/search?q=sindcfc+pe&sxsrf=ALiCzsYtDeF66s42J5wslIsPyXYaxq7GBw%3A1660398275981&source=hp&ei=w6r3YruFOdTQ1sQPw8Kv8Ac&iflsig=AJiK0e8AAAAAYve40ye0WZvBL_HavtPN4XBGsX09nGlH&gs_ssp=eJzj4tVP1zc0zDJPqbLMis82YLRSMagwT0wytEwzTTM3NTY1tEizMqhITUpNTEo0TTKztEhKsTA18OIqzsxLSU5LVihIBQBquBNg&oq=sindcfc&gs_lcp=Cgdnd3Mtd2l6EAMYAjIHCAAQgAQQCjILCC4QgAQQxwEQrwEyCwguEIAEEMcBEK8BMgQIABAKMgsILhCABBDHARCvATIFCAAQgAQyBAgAEAoyBAgAEAoyBAgAEB4yCAgAEB4QDxAKOgQIIxAnOgsILhCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CwgAEIAEELEDEIMBOggIABCABBCxAzoKCAAQsQMQgwEQQzoOCAAQgAQQsQMQgwEQyQM6BQgAEJIDOgQIABBDOgcIABCxAxBDOg0ILhCABBDHARCvARAKOgcIABCxAxAKOgoILhDHARCvARAKUABY4xJgoCdoAHAAeACAAaUCiAGrC5IBBTAuNC4zmAEAoAEB&sclient=gws-wiz


export function ContatoEscola(){
    var dadosEsola = new DadosEscolasMapa();
    var parceiros = new Parceiros();
    const navigation = useNavigation();
    const {colors} = useTheme();
    const img = dadosEsola.getMarkToUse().logo;
    const [isLoading, setIsLoading] = useState(true);

    const [NumberWts, setNumberWts] = useState("");
    const [atendesabado, setAtendesabado] = useState("");
    const [atendesemana, setAtendesemana] = useState("");
    const [atendimentosabado, setAtendimentosabado] = useState("");
    const [atendimentosemana, setAtendimentosemana] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
    const [cep, setCep] = useState("");
    const [telefone, setTelefone] = useState("");
    const [telefone2, setTelefone2] = useState("");
    const [telefone3, setTelefone3] = useState("");
    

    const msgwts = "Olá achei vocês atraves do aplicativo cfc legal, gostaria de mais informações";
    
    async function pegarDadosDeContato(){
        // Pegando todos os dados e preenchendo os campos
        // isso tem que ser melhorado para evitar desgaste, pegar uma unica CFC pelo id
        await parceiros.getParceiros();
        var cfcencontrada = parceiros.findCfcId(dadosEsola.getMarkToUse().id);
        setNumberWts(cfcencontrada.whatsapp);
        setAtendesabado(cfcencontrada.atendeSabado);
        setAtendesemana(cfcencontrada.atendeSemana);
        setAtendimentosabado(cfcencontrada.atendimentoSabado);
        setAtendimentosemana(cfcencontrada.atendimentoSemana);
        setBairro(cfcencontrada.bairro);
        setRua(cfcencontrada.rua);
        setCep(cfcencontrada.cep);
        setTelefone(cfcencontrada.telefone1);
        setTelefone2(cfcencontrada.telefone2);
        setTelefone3(cfcencontrada.telefone3);
        setIsLoading(false);
        
    }
    pegarDadosDeContato();
    function handleBakc(){
        navigation.goBack();
    }

    function handleWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=+55${NumberWts}&text=${msgwts}`);
    }
    
    useEffect(() => {
        pegarDadosDeContato();
    },[]);

    if(isLoading){
        return <Loading/>;
    }

    
    return(
        <VStack flex={1} bg="primary.600">
            <HStack pt={10} alignItems={"center"}>
                <View alignItems={"flex-start"} >
                    <IconButton
                        icon={<ArrowLeft color={colors.primary[700]} size={30}/>}
                        onPress={handleBakc} 
                    /> 
                </View>
                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Contatos</Text>
            </HStack>
            <ScrollView mx={5} showsVerticalScrollIndicator={false}>
            <Box>        
            <View p={60} w="full" h={255} alignItems="center">
                <Image
                    w={"full"}
                    h={"full"}
                    alt="logocfclegal" 
                    source={{uri: img}}/>
                </View>
            </Box>
            <Box>            
                <ScrollView mx={5} showsVerticalScrollIndicator={false}>
                   <VStack>
                        <HStack>
                            <Box>
                                <IconButton 
                                    icon={<MapPinLine color={colors.primary[700]} size={30} />}
                                />
                            </Box>
                            <Box>
                                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Endereço</Text>
                                <Text color={"primary.500"} fontSize={20}>{rua}</Text>
                                <Text color={"primary.500"} fontSize={18}>{bairro}</Text>
                                <Text color={"primary.500"} fontSize={18}>{cep}</Text>
                            </Box>
                        </HStack>

                        <HStack>
                            <Box>
                                <IconButton 
                                    icon={<PhoneCall color={colors.primary[700]} size={30} />}
                                />
                            </Box>
                            <Box>
                                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>Telefone</Text>
                                <Text color={"primary.500"} fontSize={20}>{telefone}</Text>
                                <Text color={"primary.500"} fontSize={20}>{telefone2}</Text>
                                <Text color={"primary.500"} fontSize={20}>{telefone3}</Text>
                            </Box>
                        </HStack>
                        <HStack>
                            <Box>
                                <IconButton 
                                    icon={<WhatsappLogo color={colors.primary[700]} size={30} />}
                                />
                            </Box>
                            <Box>
                                <Text fontFamily={"Roboto_700Bold"} color={"primary.700"} fontSize={22}>WhatsApp</Text>
                                <Text color={"primary.500"} fontSize={20}>{NumberWts}</Text>
                            </Box>
                        </HStack>
                        
                        <ButtonText title="Contato pelo whatsapp"  onPress={handleWhatsApp} mt={10}></ButtonText>
                   </VStack>
                   

                </ScrollView>
            </Box>
            </ScrollView>
        </VStack>
    );
}