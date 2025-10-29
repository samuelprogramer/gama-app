export class DadosEscolasMapa{

    public static marks: [];
    public static MARK_USED;

    setMarksMap(marksmap){
        DadosEscolasMapa.marks = marksmap;
    }

    getMarksMap(index){
        for(var c1 = 0; c1 < DadosEscolasMapa.marks.length; c1++){
            var cfc = DadosEscolasMapa.marks[c1]; 
            if(cfc.id==index){
                return cfc;
            }
        }
        
    }

    find(zona: string){
        var marksfind = []
        for(var c1 = 0; c1 < DadosEscolasMapa.marks.length; c1++){
            var cfc = DadosEscolasMapa.marks[c1]; 
            if(cfc.regiao === zona){
                //console.log('Nome: '+cfc.nome+' | Zona: '+cfc.regiao);
                marksfind.push(cfc);
                //console.log("Marksfind: " + marksfind)
            }
        }
        return marksfind;
    }

    setMarkToUse(cfc_to_use){
        DadosEscolasMapa.MARK_USED = cfc_to_use;
        console.log(DadosEscolasMapa.MARK_USED);
    }
    getMarkToUse(){
        return DadosEscolasMapa.MARK_USED;  
    }


}