// Se Pide Al Usuario Ingresar un Numero Entre 1 y 20
let numerousuario = prompt("Ingrese un Numero Entre 1 y 20");

// Funcion que Verifica si el Numero Ingresado es Mayor a 20 y Alerta al Usuario
const validar = numero => {

    if ((numero <= 0) || (numero > 20)) {
        alert("Numero Fuera De Rango o Dato Incorrecto");
    } else {

        //Tablas de Multiplicar del Numero Ingresado
        for (i = 1; i <= numero; i++) {
            var resultado = numero * i;
            console.log(numero + " " + " x " + " " + i + " = " + resultado);
        }

        // Factorial del Numero Ingresado
        for (let i = 1; i <= numero; i++) {
            let numero = 1;
            for (let x = 1; x <= i; x++) {
                numero = numero * x;
            }
            console.log("Factorial de " + i + " es: " + numero);
        }
    }
}

validar(numerousuario);