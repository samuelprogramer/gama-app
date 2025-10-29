import { Box, Center, Image, Spinner, Text, View, VStack } from 'native-base';
export function Loading() {
    const imgaedigitals = require('../assets/logoaedigitals.png');

    const img = require('../assets/logocfclegal.jpeg');
    return (
        <VStack flex={1} bg="primary.600" w={"100%"}>
            <Box flex={1}>
                <Center flex={1}>
                    <View w="full" h={255} alignItems="center">
                        <Image w={155} h={155} alt="logocfclegal" source={img} />
                    </View>
                    <Spinner size={80} color="primary.700"></Spinner>
                </Center>
            </Box>
            <Box h="15%">
                <View w="full" alignItems="center">
                    <Image w={35} h={35} alt="logoaedigitals" source={imgaedigitals} />
                </View>
            </Box>
        </VStack>
    );
}