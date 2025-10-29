/**
 * Mi Starts 
 * Create by Samuel
 * 02/09/2022
 * mistarts.com.br
 */


export class AgendamentoDados{
    static TipoAulas = "";// PRATICA | TEORICA | SIMULADO

    static CURSO;

    static instrutorObject;
    static instrutorId = "";
    static InstrutorName = "";



    static dataAgendamento = "";
    static horariosObject = [];
    static veiculo = -1;
    

    setTipo(tipo: string){
        AgendamentoDados.TipoAulas = tipo; 
    }
    getTipo(){
        return AgendamentoDados.TipoAulas;
    }
    setAgendamentoData(data){
        AgendamentoDados.dataAgendamento = data;
    }
    getAgendamentodata(){
        return AgendamentoDados.dataAgendamento;
    }
    // Object
    /*
    Object {
        "aulas_praticas": "",
        "aulas_simulador": "",
        "aulas_teoricas": "{\"qtd_aulas\":0}",
        "categorias": "B",
        "id": 5,
        "liberacao": "",
        "nome": "1° Habilitação B",
        "service": 3,
        "teorico": 1,
    },
    */
    setCurso(curso){
        AgendamentoDados.CURSO = curso;
    }
    getCurso(){
        return AgendamentoDados.CURSO;
    }
    //-----------------------------------------------------------------------
    setInstrutorObject(instrutor){
        AgendamentoDados.instrutorObject = instrutor;
    }
    getInstrutorObject(){
        return AgendamentoDados.instrutorObject;
    }
    setIdInstrutor(id: string){
        AgendamentoDados.instrutorId = id;
    }
    getIdInstrutor(){
        return AgendamentoDados.instrutorId;
    }

    /**
     * Object {
     *    "dia": "2022-09-12",
     *    "horarios": "20:00",
     *    "id_veiculo": 1,
     *    "instrutores": "11",
     *    "instrutores_nome": "Samuel Thi",
     *    "status": "livre",
     *    "tipo": "moto",
     *  },
     *  */
    setHorariosObject(horarioObj){
        AgendamentoDados.horariosObject.push(horarioObj.horarios);
        this.setVeitulo(horarioObj.id_veiculo);
    }
    
    getHorariosObject(){
        return AgendamentoDados.horariosObject;
    }
    cleanHorarios(){
        AgendamentoDados.horariosObject = [];
    }

    /**
     * O veiculo esta juntamente com o horario
     */
    setVeitulo(id_veiculo){
        AgendamentoDados.veiculo = id_veiculo;
    }
    getVeitulo(){
        return AgendamentoDados.veiculo;
    }

    /**
     * Uma maneira mais visual para o usuario
     */
    getHorariosUser(){
        var horariosString = "";
        for(var x =0; x<AgendamentoDados.horariosObject.length;x++){
            horariosString += "["+AgendamentoDados.horariosObject[x]+"]  ";
        }
        return horariosString;
    }






}







