import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from "../screens/Home";
import { MapsFrame } from '../screens/MapsFrame';
import { SingIn } from '../screens/SingIn';
import { SolicitarSenha } from '../screens/SolicitarSenha';
import { RegiaoSelect } from '../screens/RegiaoSelect';
import { Escolas } from '../screens/escolas/Escolas';
import { DetalhesEscola } from '../screens/DetalhesEscola';
import { Contato } from '../screens/Contato';
import { Contrato } from '../screens/areainterna/Contrato';
import { HomeInterna } from '../screens/areainterna/HomeInterna';
import { ConteudoVip } from '../screens/areainterna/ConteudoVip/ConteudoVip';
import { HomeAgendamentos } from '../screens/areainterna/agendamentos/HomeAgendamentos';
import { MinhaConta } from '../screens/areainterna/MinhaConta';
import { PacoteDeServico } from '../screens/areainterna/pacoteservico/PacoteDeServicos';
import { HomeServicos } from '../screens/escolas/servicos/HomeServicos';
import { PaginaConteudo } from '../screens/escolas/servicos/PaginaConteudo';
import { HomeMaterial } from '../screens/escolas/materialestudo/HomeMaterial';
import { AulasPraticasMaterial } from '../screens/escolas/materialestudo/AulasPraticasMaterial';
import { AulasTeoricasMaterial } from '../screens/escolas/materialestudo/AulasTeoricasMaterial';
import { PercursoMaterial } from '../screens/escolas/materialestudo/PercursoMaterial';
import { LinksUteisMaterial } from '../screens/escolas/materialestudo/LinksUteisMaterial';
import { ContatoEscola } from '../screens/escolas/ContatoEscola';
import { LoginEscola } from '../screens/escolas/LoginEscola';
import { Matriculese } from '../screens/escolas/Matriculese';
import { Parceiros } from '../screens/escolas/Parceiros';
import { AulasPraticas } from '../screens/areainterna/agendamentos/AulasPraticas';
import { ViewLinks } from '../screens/escolas/materialestudo/ViewLinks'
import { SelecionarInstrutor } from '../screens/areainterna/agendamentos/SelecionarInstrutor';
import { MinhasAulas } from '../screens/areainterna/minhasaulas/MinhasAulas';
import { MarcarData } from '../screens/areainterna/agendamentos/MarcaData';
import { SelecionarHorario } from '../screens/areainterna/agendamentos/SelecionarHorario';
import { ConfirmarAgendamento } from '../screens/areainterna/agendamentos/ConfirmarAgendamento';
import { Veiculos } from '../screens/escolas/servicos/Veiculos';
import { ViewWebServices } from '../screens/escolas/servicos/ViewWebServices';
import { NaoSouHabilitado } from '../screens/escolas/servicos/NaoSouHabilitado';
import { SouHabilitado } from '../screens/escolas/servicos/SouHabilitado';
import { MatriculaOnline } from '../screens/escolas/matriculaonline/MatriculaOnlie';
const {Navigator, Screen } = createNativeStackNavigator();
import { FeComercio } from '../screens/FeComercio';
import { Sorteio } from '../screens/areainterna/premiacao/Sorteio';
import { MarcarExame } from '../screens/areainterna/MarcaExame';
import { SolicitarLADV } from '../screens/areainterna/SolicitarLADV';
import { CartaodoEmpresario } from '../screens/CartaoEmpresario';
import { ComoChegarScreen } from '../screens/comochegar/ComoChegarScreen';
import { TelaRestricao } from '../screens/areainterna/agendamentos/TelaRestricao';
import { DadosAula } from '../screens/areainterna/minhasaulas/DadosAula';
import { ContratoView } from '../screens/areainterna/Contrato/ContratoView';
import {GovBr} from '../screens/Govbr';

/*
 * As rotas sao pre definidas em ../@types/navigation.d.ts
 */
export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="home" component={Home}/>
            <Screen name="mapescolas" component={MapsFrame}/>
            <Screen name="login" component={SingIn}/>
            <Screen name="soliticarsenha" component={SolicitarSenha}/>
            <Screen name="regiaoselect" component={RegiaoSelect}/>
            <Screen name="escolas" component={Escolas}/>
            <Screen name="detalhesescola" component={DetalhesEscola}/>
            <Screen name="contato" component={Contato}/>
            <Screen name="contrato" component={Contrato}/>
            <Screen name="homeinterna" component={HomeInterna}/>
            <Screen name="conteudovip" component={ConteudoVip} />
            <Screen name="minhaconta" component={MinhaConta}/>
            <Screen name="pacotedeservicos" component={PacoteDeServico}/>
            <Screen name="homeagendamentos" component={HomeAgendamentos} />
            {/* <Screen name="minhasaulas" component={} */}
            {/* <Screen name="contato" component={} */}
            <Screen name="homeservicos" component={HomeServicos} />
            <Screen name="paginaconteudo" component={PaginaConteudo} />
            <Screen name="homematerial" component={HomeMaterial} />
            <Screen name="aulaspraticasmaterial" component={AulasPraticasMaterial} />
            <Screen name="aulasteoricasmaterial" component={AulasTeoricasMaterial} />
            <Screen name="percursomaterial" component={PercursoMaterial}/>
            <Screen name="linksuteismaterial" component={LinksUteisMaterial}/>
            <Screen name="contatoescolas" component={ContatoEscola}/>
            <Screen name="loginescola" component={LoginEscola}/>
            <Screen name="matriculese" component={Matriculese}/>
            <Screen name="parceiros" component={Parceiros}/>
            <Screen name="aulaspraticasagendamento" component={AulasPraticas}/>
            <Screen name="viewlinks" component={ViewLinks}/>
            <Screen name="setinstrutores" component={SelecionarInstrutor}/>
            <Screen name="minhasaulas" component={MinhasAulas}/>
            <Screen name="marcadata" component={MarcarData}/>
            <Screen name="selecionarhorario" component={SelecionarHorario}/>
            <Screen name="confirmaragendamento" component={ConfirmarAgendamento}/>
            <Screen name="veiculos" component={Veiculos}/>
            <Screen name="viewwebservice" component={ViewWebServices}/>
            <Screen name="naosouhabilitado" component={NaoSouHabilitado}/>
            <Screen name="souhabilitado" component={SouHabilitado}/>
            <Screen name="matriculaonline" component={MatriculaOnline}/>
            <Screen name="fecomercio" component={FeComercio}/>
            <Screen name="sorteio" component={Sorteio}/>
            <Screen name="marcarexame" component={MarcarExame}/>
            <Screen name="solicitarladv" component={SolicitarLADV}/>
            <Screen name="cartaodoempresario" component={CartaodoEmpresario}/>
            <Screen name="comochegarscreen" component={ComoChegarScreen}/>
            <Screen name="telarestricao" component={TelaRestricao}/>

            <Screen name="dadosaula" component={DadosAula}/>
            
            <Screen name="contratoview" component={ContratoView}/>
            <Screen name="govbr" component={GovBr}/>

        </Navigator>
    );
}



