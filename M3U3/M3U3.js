
function Transporte(){    
    const distancia= parseInt(prompt("Ingrese una distancia: ",''))
    if(!Number.isNaN(distancia)){
        switch(true){
            case (distancia>=0 && distancia<1000): 
                document.writeln("andá a pie");
                console.log("andá a pie"); 
                break;
            case (distancia>=1000 && distancia<10000): 
                document.writeln("andá en bicicleta");
                console.log("andá en bicicleta");
                break;
            case (distancia>=10000 && distancia<30000): 
                document.writeln("andá en colectivo");
                console.log("andá en colectivo");
                break;
            case (distancia>=30000 && distancia<100000): 
                document.writeln("andá en auto");
                console.log("andá en auto");
                break;
            case (distancia>=100000): 
                document.writeln("andá en avión");
                console.log("andá en avión");
                break;
            default: 
                document.writeln("Ingresa un valor numérico válido.");
                console.log("Ingresa un valor numérico válido.");
        }
    }
    else{
        document.writeln("ingrese un dato válido");
        console.log("ingrese un dato válido"); 
    }
}

function CrearArray(){
    let entrada=0;
    const numeros =[];
    
    while(entrada<6){  
        const dato= parseInt(prompt(`Ingrese el ${entrada+1}° número: `,''))
        if(!Number.isNaN(dato)){
            numeros.push(dato)
            entrada++;            
        }
        else{
            entrada=6
        }
    }
    return numeros
}

function MayorNumero(){
    const MiArray= CrearArray();
    let mayor =MiArray[0];

    if(MiArray.length>0){
        for (let i=1; i< MiArray.length; i++){
            if(mayor<MiArray[i]){
                mayor=MiArray[i]
            }
        }
        document.writeln(`El mayor número es ${mayor}`);
        console.log(`El mayor número es ${mayor}`);
    }
    else{
            document.writeln("Ingrese solo números");
            console.log("Ingrese solo números");
        }
}



