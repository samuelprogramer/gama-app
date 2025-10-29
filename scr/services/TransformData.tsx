

export class TransformData{

    envertendoData(dataoriginal){
        var dat = dataoriginal.toString().split("/");
        var dataOK = dat[2]+"-"+dat[1]+"-"+dat[0];
        return dataOK;
    }

}
