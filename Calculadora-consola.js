console.log("si funciona la calculadora");

let primerNumero;
let segundoNumero;
let resultado;
let opcion;

do{
    opcion = prompt(
        "Que operacion haras?\n1)Suma\n2)Resta\n3)Multiplicacion\n4)Division"
    );

    if(parseFloat(opcion)>0 && parseFloat(opcion)<5){
        if(parseFloat(opcion)==1)suma();
        if(parseFloat(opcion)==2)resta();
        if(parseFloat(opcion)==3)multiplicacion();
        if(parseFloat(opcion)==4)division();
    }else{
        alert("Opcion inexistente");
    }   
}while(typeof(opcion === 'string'));

/***************************FUNCIONES PARA LA CALCULADORA************************************************** */

function suma(){ //funcion que realiza una suma

    do{ //Pide el primer valor y confirma si el valor es numero
        primerNumero = prompt("Asigna el primer numero: ", '');
        if(isNaN(parseFloat(primerNumero))){
            alert("Ingresar solo valores numericos");
        }
    }while(isNaN(parseFloat(primerNumero)));
    
    do{//Pide el segundo valor y confirma si el valor es numero
        segundoNumero = prompt("Introduce el segundo numero: ", '');
        if(isNaN(parseFloat(segundoNumero))){
            alert("Ingresar solo valores numericos");
        }
    }while(isNaN(parseFloat(segundoNumero)));
    
    resultado = parseFloat(primerNumero)+parseFloat(segundoNumero);
    console.log("El resultado es: " + resultado);
}

function resta(primerNumero,segundoNumero){//funcion que realiza una resta

    do{ //Pide el primer valor y confirma si el valor es numero
        primerNumero = prompt("Asigna el primer numero: ", '');
        if(isNaN(parseFloat(primerNumero))){
            alert("Ingresar solo valores numericos");
        }
    }while(isNaN(parseFloat(primerNumero)));
    
    do{//Pide el segundo valor y confirma si el valor es numero
        segundoNumero = prompt("Introduce el segundo numero: ", '');
        if(isNaN(parseFloat(segundoNumero))){
            alert("Ingresar solo valores numericos");
        }
    }while(isNaN(parseFloat(segundoNumero)));
    
    resultado = parseFloat(primerNumero)-parseFloat(segundoNumero);
    console.log("El resultado es: " + resultado);
}

function multiplicacion(primerNumero,segundoNumero){//funcion que realiza una multiplicacion

    do{ //Pide el primer valor y confirma si el valor es numero
        primerNumero = prompt("Asigna el primer numero: ", '');
        if(isNaN(parseFloat(primerNumero))){
            alert("Ingresar solo valores numericos");
        }
    }while(isNaN(parseFloat(primerNumero)));
    
    do{//Pide el segundo valor y confirma si el valor es numero
        segundoNumero = prompt("Introduce el segundo numero: ", '');
        if(isNaN(parseFloat(segundoNumero))){
            alert("Ingresar solo valores numericos");
        }
    }while(isNaN(parseFloat(segundoNumero)));
    
    resultado = parseFloat(primerNumero)*parseFloat(segundoNumero);
    console.log("El resultado es: " + resultado);
}

function division(primerNumero,segundoNumero){//funcion que realiza una division

    do{ //Pide el primer valor y confirma si el valor es numero
        primerNumero = prompt("Asigna el primer numero: ", '');
        if(isNaN(parseFloat(primerNumero))){
            alert("Ingresar solo valores numericos");
        }
    }while(isNaN(parseFloat(primerNumero)));
    
    do{//Pide el segundo valor y confirma si el valor es numero
        segundoNumero = prompt("Introduce el segundo numero: ", '');
        if(isNaN(parseFloat(segundoNumero))){
            alert("Ingresar solo valores numericos");
        }
    }while(isNaN(parseFloat(segundoNumero)));
    
    resultado = parseFloat(primerNumero)/parseFloat(segundoNumero);
    console.log("El resultado es: " + resultado);

}