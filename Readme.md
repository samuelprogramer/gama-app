# CFCLegal

versao 1.0.5


Link da api a ser usada
https://cfclegal.autoescoladigitals.com.br

Pacote
// cfclegal.autoescoladigitals.com.br
// br.com.brazil.autoescoladigitals.cfclegal


[] SplashScreen
[] Clicar na autoescola (tela do mapa) e levar pra autoescola


[] Icones




# comandos usados
yarn add @native-base/icons
yarn add native-base
expo install expo-font @expo-google-fonts/roboto
expo install react-native-safe-area-context
expo install react-native-svg
yarn add phosphor-react-native

# Corrigir tela de Login - btn voltar esta na barra de notificações

# Tentar colocar a splash screen
https://www.youtube.com/watch?v=PlubOKfi46o
https://github.com/zoontek/react-native-bootsplash

# Logo

# Fazendo a navegação
yarn add @react-navigation/native
expo install react-native-screens react-native-safe-area-context
yarn add react-native-screens react-native-safe-area-context
yarn add @react-navigation/native-stack

# Padroes
Todas as telas deve ter essas configurações
<VStack flex={1} bg="primary.600">

26/07/2022 Atualização do EXPO
npm install -g expo-cli


# Intalando MapView

https://github.com/react-native-maps/react-native-maps

yarn add react-native-maps
cd ios
npx pod-install // intalamos a versao 0.1.38

Conta de SAMUEL LISBOA - MISTARTS
https://console.cloud.google.com/apis/library?project=projectcfclegal
> Chave Api Map Google Gerada
Nome da chave: Chave 1 CFC Legal
key da api   : AIzaSyCaStUYcGnOi04RwkKyrN0tMVIW5MXmt8A


Add your API key to your manifest file (android/app/src/main/AndroidManifest.xml):

<application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="AIzaSyCaStUYcGnOi04RwkKyrN0tMVIW5MXmt8A"/>
</application>


# Geolocation

ibere.fm@gmail.com
123

# README

pacote
br.com.brazil.autoescoladigitals.cfclegal


Os dados dentro de api em '/webservice/post/retorno/partner/mapa-lista/' devem estar com as configurações padroes
"bairro": "",
"cep": "",
"cidade": 000000,
"distance": "00,00",
"distancia": 00000.00,
"endereco": "Endereco auto escola",
"estado": "00",
"id": 0,
"latitude": "0000.00",
"logo": "https://link_de_uma_imagem.com.br/local/da/img.png",
"longitude": "000.00",
"nome": "NOME AUTO ESCOLA",
"regiao": "ZONA NORTE", --> ZONA NORTE - ZONA SUL - ZONA LESTE - ZONA OESTE - CENTRO
"sigla": "AAA",
"tipo": "AUTOESCOLAS",



Object {
  "acesso": 1,
  "atendesabado": "",
  "atendesemana": "Seg-Sex: 9h - 18h",
  "bairro": "",
  "celular": "11944475559",
  "cep": "",
  "cidade": "Recife",
  "email": "contato@autoescoladigitals.com.br",
  "endereco": "Ae Digitals",
  "escola": "AUTO ESCOLA DIGITALS",
  "estado": "26",
  "idUnidade": "0",
  "iduser": "7",
  "login": "ibere.fm@gmail.com",
  "logo": "auto-escola-digitals.png",
  "logoext": "https://cfclegal.autoescoladigitals.com.br/public/images/logos/auto-escola-digitals.png",
  "nome": "Iberê Malheiros",
  "nomeContato": "Iberê Malheiros",
  "numero": "",
  "status": "SIM",
  "telefone": "11944475559",
  "telefone1": "(11) 9579-8665",
  "telefone2": null,
  "telefone3": null,
  "unidade": 0,
  "whatsapp": "(11) 95798-6653",
}




