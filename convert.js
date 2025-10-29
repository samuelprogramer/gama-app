var fs = require('fs'); 
var x = "";

async function getText(){
    await fs.readFile('data.txt', function(err, data) {
        var xx = data+"";
        console.log("OK");
        x = xx;
    });
    setTimeout(() => {
        okData();
        
    }, 1000)
      
    
}

function okData(){
    var da = x.replaceAll("\r","").split("\n");
    //console.log(da)
    for(var i=0;i<da.length;i++){
        if(da[i]==""){
            console.log("{");
            console.log("   link:'handle',");
            i++;
            console.log("   title:'"+da[i]+"',");
            console.log("   id:-"+i);
            console.log("},");
        }else{
            console.log("{");
            console.log("   link:'"+da[i]+"',");
            i++;
            console.log("   title:'"+da[i].trim()+"',");
            console.log("   id:"+i);
            console.log("},");
        }
    }
}

getText();

