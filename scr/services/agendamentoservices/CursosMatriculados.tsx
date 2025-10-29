

export class CursosMatriculados{

    public static matriculados_todos;
    /*
    Array [
        Object {
            "aulas_praticas": "",
            "aulas_simulador": "",
            "aulas_teoricas": "{\"qtd_aulas\":0}",
            "categorias": "A",
            "id": 4,
            "liberacao": "",
            "nome": "1° Habilitação A",
            "service": 1,
            "teorico": 0,
        },
    ]
    */

    /*
Array [
  Object {
    "aulas_praticas": "",
    "aulas_simulador": "",
    "aulas_teoricas": "{\"qtd_aulas\":0}",
    "categorias": "A",
    "id": 3,
    "liberacao": "",
    "nome": "1° Habilitação A",
    "service": 1,
    "teorico": 0,
  },
  Object {
    "aulas_praticas": "",
    "aulas_simulador": "",
    "aulas_teoricas": "{\"qtd_aulas\":0}",
    "categorias": "A",
    "id": 4,
    "liberacao": "",
    "nome": "1° Habilitação A",
    "service": 1,
    "teorico": 0,
  },
]
    */
    setCursosTodos(matriculados){
        //console.log(matriculados)
        CursosMatriculados.matriculados_todos = matriculados;
    }
    getCursosTodos(){
        return CursosMatriculados.matriculados_todos;
    }



}








