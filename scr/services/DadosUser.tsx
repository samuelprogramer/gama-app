export class DadosUser{


    /**
     * NO EMAIL TEMOS UM PEQUENO PROBLEMA
     * 
     * PEGUE O EMAIL COM USER LOGADO EM:
        var apilogin = new ApiLogin();
     * 
     */

    public static usercompleto: [];

    setUserCompleto(usercompleto: []){
        DadosUser.usercompleto = usercompleto;
    }

    getUserCompleto(){
        console.log(DadosUser.usercompleto[0])
    }

    /**
     * Getter acesso
     * @return {number}
     */
	public getAcesso(): number {
		return DadosUser.acesso;
	}

    /**
     * Getter atendesabado
     * @return {string}
     */
	public getAtendesabado(): string {
		return DadosUser.atendesabado;
	}

    /**
     * Getter atendesemana
     * @return {string}
     */
	public getAtendesemana(): string {
		return DadosUser.atendesemana;
	}

    /**
     * Getter bairro
     * @return {string}
     */
	public getBairro(): string {
		return DadosUser.bairro;
	}

    /**
     * Getter celular
     * @return {string}
     */
	public getCelular(): string {
		return DadosUser.celular;
	}

    /**
     * Getter cep
     * @return {string}
     */
	public getCep(): string {
		return DadosUser.cep;
	}

    /**
     * Getter cidade
     * @return {string}
     */
	public getCidade(): string {
		return DadosUser.cidade;
	}

    /**
     * Getter email
     * @return {string}
     */
	public getEmail(): string {
		return DadosUser.email;
	}

    /**
     * Getter endereco
     * @return {string}
     */
	public getEndereco(): string {
		return DadosUser.endereco;
	}

    /**
     * Getter escola
     * @return {string}
     */
	public getEscola(): string {
		return DadosUser.escola;
	}

    /**
     * Getter estado
     * @return {string}
     */
	public getEstado(): string {
		return DadosUser.estado;
	}

    /**
     * Getter idUnidade
     * @return {string}
     */
	public getIdUnidade(): string {
		return DadosUser.idUnidade;
	}

    /**
     * Getter iduser
     * @return {string}
     */
	public getIduser(): string {
		return DadosUser.iduser;
	}

    /**
     * Getter login
     * @return {string}
     */
	public getLogin(): string {
		return DadosUser.login;
	}

    /**
     * Getter logo
     * @return {string}
     */
	public getLogo(): string {
		return DadosUser.logo;
	}

    /**
     * Getter logoext
     * @return {string}
     */
	public getLogoext(): string {
		return DadosUser.logoext;
	}

    /**
     * Getter nome
     * @return {string}
     */
	public getNome(): string {
		return DadosUser.nome;
	}

    /**
     * Getter nomeContato
     * @return {string}
     */
	public getNomeContato(): string {
		return DadosUser.nomeContato;
	}

    /**
     * Getter numero
     * @return {string}
     */
	public getNumero(): string {
		return DadosUser.numero;
	}

    /**
     * Getter status
     * @return {string}
     */
	public getStatus(): string {
		return DadosUser.status;
	}

    /**
     * Getter telefone
     * @return {string}
     */
	public getTelefone(): string {
		return DadosUser.telefone;
	}

    /**
     * Getter telefone1
     * @return {string}
     */
	public getTelefone1(): string {
		return DadosUser.telefone1;
	}

    /**
     * Getter telefone2
     * @return {string}
     */
	public getTelefone2(): string {
		return DadosUser.telefone2;
	}

    /**
     * Getter telefone3
     * @return {string}
     */
	public getTelefone3(): string {
		return DadosUser.telefone3;
	}

    /**
     * Getter unidade
     * @return {string}
     */
	public getUnidade(): string {
		return DadosUser.unidade;
	}

    /**
     * Getter whatsapp
     * @return {string}
     */
	public getWhatsapp(): string {
		return DadosUser.whatsapp;
	}

    /**
     * Getter LOGADO
     * @return {string}
     */
	public getLogado(): boolean {
		return DadosUser.LOGADO;
	}

    /**
     * Setter acesso
     * @param {number} value
     */
	public setAcesso(value: number) {
		DadosUser.acesso = value;
	}

    /**
     * Setter atendesabado
     * @param {string} value
     */
	public setAtendesabado(value: string) {
		DadosUser.atendesabado = value;
	}

    /**
     * Setter atendesemana
     * @param {string} value
     */
	public setAtendesemana(value: string) {
		DadosUser.atendesemana = value;
	}

    /**
     * Setter bairro
     * @param {string} value
     */
	public setBairro(value: string) {
		DadosUser.bairro = value;
	}

    /**
     * Setter celular
     * @param {string} value
     */
	public setCelular(value: string) {
		DadosUser.celular = value;
	}

    /**
     * Setter cep
     * @param {string} value
     */
	public setCep(value: string) {
		DadosUser.cep = value;
	}

    /**
     * Setter cidade
     * @param {string} value
     */
	public setCidade(value: string) {
		DadosUser.cidade = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public setEmail(value: string) {
		DadosUser.email = value;
	}

    /**
     * Setter endereco
     * @param {string} value
     */
	public setEndereco(value: string) {
		DadosUser.endereco = value;
	}

    /**
     * Setter escola
     * @param {string} value
     */
	public setEscola(value: string) {
		DadosUser.escola = value;
	}

    /**
     * Setter estado
     * @param {string} value
     */
	public setEstado(value: string) {
		DadosUser.estado = value;
	}

    /**
     * Setter idUnidade
     * @param {string} value
     */
	public setIdUnidade(value: string) {
		DadosUser.idUnidade = value;
	}

    /**
     * Setter iduser
     * @param {string} value
     */
	public setIduser(value: string) {
		DadosUser.iduser = value;
	}

    /**
     * Setter login
     * @param {string} value
     */
	public setLogin(value: string) {
		DadosUser.login = value;
	}

    /**
     * Setter logo
     * @param {string} value
     */
	public setLogo(value: string) {
		DadosUser.logo = value;
	}

    /**
     * Setter logoext
     * @param {string} value
     */
	public setLogoext(value: string) {
		DadosUser.logoext = value;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public setNome(value: string) {
		DadosUser.nome = value;
	}

    /**
     * Setter nomeContato
     * @param {string} value
     */
	public setNomeContato(value: string) {
		DadosUser.nomeContato = value;
	}

    /**
     * Setter numero
     * @param {string} value
     */
	public setNumero(value: string) {
		DadosUser.numero = value;
	}

    /**
     * Setter status
     * @param {string} value
     */
	public setStatus(value: string) {
		DadosUser.status = value;
	}

    /**
     * Setter telefone
     * @param {string} value
     */
	public setTelefone(value: string) {
		DadosUser.telefone = value;
	}

    /**
     * Setter telefone1
     * @param {string} value
     */
	public setTelefone1(value: string) {
		DadosUser.telefone1 = value;
	}

    /**
     * Setter telefone2
     * @param {string} value
     */
	public setTelefone2(value: string) {
		DadosUser.telefone2 = value;
	}

    /**
     * Setter telefone3
     * @param {string} value
     */
	public setTelefone3(value: string) {
		DadosUser.telefone3 = value;
	}

    /**
     * Setter unidade
     * @param {string} value
     */
	public setUnidade(value: string) {
		DadosUser.unidade = value;
	}

    /**
     * Setter whatsapp
     * @param {string} value
     */
	public setWhatsapp(value: string) {
		DadosUser.whatsapp = value;
	}

    /**
     * Setter LOGADO
     * @param {boolean} value
     */
	public setLogado(value: boolean) {
		DadosUser.LOGADO = value;
	}
    
    public static LOGADO: boolean;

    private static acesso: number;
    private static atendesabado: string;
    private static atendesemana: string;
    private static bairro: string;
    private static celular: string;
    private static cep: string;
    private static cidade: string;
    private static email: string;
    private static endereco: string;
    private static escola: string;
    private static estado: string;
    private static idUnidade: string;
    public static iduser: string;
    private static login: string;
    private static logo: string;
    public static logoext: string;
    private static nome: string;
    private static nomeContato: string;
    private static numero: string;
    private static status: string;
    private static telefone: string;
    private static telefone1: string;
    private static telefone2: string;
    private static telefone3: string;
    private static unidade: string;
    private static whatsapp: string;

}