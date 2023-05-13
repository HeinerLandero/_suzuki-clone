/* Crea una función llamada "obtenerPromedio" que reciba un array de números como argumento y devuelva el promedio de esos números */

function obtenerPromedio(numeros){
    var suma = 0;
    for (var i = 0;i < numeros.length ; i++){
        suma += numeros[i];
    }
    var promedio = suma / numeros.length;
    return promedio;
};

/* Escribe una función llamada "invertirArray" que reciba un array como argumento y devuelva un nuevo array con los elementos en orden inverso. */
function invertirArray(array){
    var newArray=[];
     for (var i = array.length - 1; i >= 0 ; i--) {
        newArray.push(array[i]);
    }
    return newArray;
};

/* Escribe una función llamada "eliminarDuplicados" que reciba un array como argumento y devuelva un nuevo array con los elementos sin duplicados. */
function eliminarDuplicados(array){
    var  newArrayNoDuplic = [];
    for(var i = 0;i < array.length ; i++){
        if (newArrayNoDuplic.indexOf(array[i])=== -1) {
            newArrayNoDuplic.push(array[i])
        }
    }
    return newArrayNoDuplic;
};

/* Escribe una función llamada "encontrarMaximo" que reciba un array de números como argumento y devuelva el número máximo encontrado en ese array. */
function encontrarMaximo(numbers){
    var numberMax = numbers[0];
    for(var i = 1;i < numbers.length ; i++){
        if(numbers[i]>numberMax){
            numberMax = numbers[i];
        }
    }
    return numberMax;
};


/* Crea una función llamada "obtenerPares" que reciba un array de números como argumento y devuelva un nuevo array que contenga solo los números pares del array original. */
function obtenerPares(array){
    var arrayPares = [];
    for(var i = 0;i < array.length ; i++){
        if(array[i]%2 === 0){
            arrayPares.push(array[i]);
        }
    }
    return arrayPares;
};

/* Escribe una función llamada "contarElementos" que reciba un array como argumento y devuelva un objeto con la cantidad de veces que aparece cada elemento en el array. */
function contarElementos(array){
    var contador ={};
    for(var i = 0;i < array.length ; i++){
        var element=array[i];
        if(contador[element]){
            contador[element]++
        }else{ 
            contador[element]=1;
        }
    }
    return contador
};
/* Crea una calculadora de propinas que tome el total de la cuenta y el porcentaje de propina como entrada, y calcule el monto de propina a pagar. Luego, muestra el monto total (cuenta + propina) por pantalla. */


/* Escribe una función que verifique si una contraseña cumple con ciertos criterios. Los criterios pueden ser, por ejemplo, tener al menos 8 caracteres de longitud, contener al menos una letra mayúscula, una letra minúscula y un número. La función debe devolver verdadero si la contraseña es válida y falso en caso contrario. */

/* Crea un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit y viceversa. Puedes utilizar la fórmula de conversión para realizar los cálculos. */

/* Escribe un programa que solicite al usuario un número y determine si es primo o no. Un número primo es aquel que solo es divisible por 1 y por sí mismo. */

/* Crea un programa que genere la secuencia de Fibonacci. La secuencia comienza con 0 y 1, y cada número posterior es la suma de los dos números anteriores. El programa debe solicitar al usuario cuántos números de la secuencia desea generar y mostrarlos por pantalla. */

/* Escribe una función que determine si una palabra o frase ingresada por el usuario es un palíndromo. Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha y de derecha a izquierda, sin tener en cuenta los espacios en blanco ni los signos de puntuación. */