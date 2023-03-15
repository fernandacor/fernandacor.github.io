// console.log for outputs
// 1.- Ejercicio 1
function primerNumeroQueNoSeRepite(str){
  const freq = {};
  for(let i = 0; i < str.length; i++){
      const char = str[i];
      // Al utlizar un tipo de "diccionario" utilizamos el operador condicional terciario 
      // para determinar si el caracter está en este, si es así este le suma 1 a ese caracter,
      // si no es así este le asigna el valor 1.
      freq[char] = freq[char] ? freq[char] + 1 : 1;
  }

  for(let i = 0; i < str.length; i++) {
      const char = str[i];
      // Busca el caracter que tenga asignado el valor 1, si lo encuentra va a hacer el return
      if(freq[str[i]] === 1){
          return char;
      }
  }
  //Si no encuentra ningun valor que tenga asignado el valor 1, va a regresar "null"
  return null;
}

console.log('Ejercicio 1: '+ primerNumeroQueNoSeRepite('abacddbec'));


// 2.- Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.
function bubbleSorter()
{

    {
        for (let i; i = bubbleSort.length; i++)
        {
            
        }

    }

}

const bubbleSort = arr => {
    const l = arr.length;
    for (let i = 0; i < l; i++ ) {
      for (let j = 0; j < l - 1 - i; j++ ) {
        if ( arr[ j ] > arr[ j + 1 ] ) {
          [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
        }
      }
    }
  
    return arr;
  };
  
  const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
  const result = bubbleSort(arr);
  
  result;

// 3.- 
function invertArray()
{

}

function modifyArray()
{

}

function newReversedArray(array) {
  let newNums = [];
  array.forEach(n => newNums.unshift(n));
  return newNums;
}

function reverseArray(array) {

  for (let i = 0; i < array.length; i++) {
    array.splice(array.length - i, 0, array[0]);
    array.shift();
  }

}

let nums = [15, 34, 8, 24, 1];
console.log("Array original: " + nums);

let newNums = newReversedArray(nums);
console.log("Nuevo array: " + newNums);

reverseArray(nums);
console.log("Mismo array invertido: " + nums);


// 4.- Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.
function capitalizarPalabra(str) {
  //llamar return para que regrese el resultado 
  return str
  //usar split para separar la frase en un arreglo de palabras
    .split(' ')
    //Usar map para iterar en las palabras
    //Cambiar la primera letra (0) a UpperCase 
    //Agregar las letras restantes desde posicion (1)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    // juntar las palabras del arreglo
    .join(' ');
}

console.log(capitalizarPalabra('hola mundo'));


// 5.- 
//Crear funcion
function MCD(x, y){
  //Crear variables para el mcd y el resto
  var mcd, rest;
  //Crear ciclo while para que se repita mientras x y y sean diferentes de 0
  while (x != 0 && y != 0){
  rest = x%y;
  x = y;
  y = rest;
  } 
  //Si x es igual a 0, mcd es igual a y
  if(x==0) mcd =y;
  //Si y es igual a 0, mcd es igual a x
  if(y==0) mcd = x;
  return mcd;
  }
  console.log(MCD(10,100))

// 6.-Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.
function hackerSpeak()
{
    // if A existe, replace it por 4, E = 3, I = 1, o = 0, U = ??
    // recorrer el array
    // console.log(cadena.replace('A', '4'))
}

// 7.-
function listMaker()
{

}

// Ejercicio 7
function factoriza(num){
  let lista = [];
  for(let i = 1; i <= num; i++){
      if(num % i === 0){
          lista.push(i);
      }
  }
  return lista;
}

console.log('Actividad 7: [' + factoriza(12)+']');


// 8.- Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]
function removeDuplicates()
{

}


function quitaDuplicados(array) {
  return array.filter((item, i) => array.indexOf(item) === i);
}

let numsRepetidos = [9, 3, 3, 3, 9, 1, 3, 1, 0, 1, 1, 0, 0];
let numsNoRepetidos = quitaDuplicados(numsRepetidos);
console.log("Array con números repetidos: " + numsRepetidos);
console.log("Arary con números sin repetir: " + numsNoRepetidos);

// 9.- Cadena más corta
function longitudCadenaMasCorta(listaCadenas) {
  // Inicializar la longitud mínima como la longitud de la primera cadena
  let longitudMinima = listaCadenas[0].length;

  // Recorrer la lista de cadenas y actualizar la longitud mínima si se encuentra una cadena más corta
  for (let i = 1; i < listaCadenas.length; i++) {
    if (listaCadenas[i].length < longitudMinima) {
      longitudMinima = listaCadenas[i].length;
    }
  }

  // Devolver la longitud mínima
  return longitudMinima;
}

const listaCadenas = ['Memoria', 'Mundo', 'JavaScript', 'Mexico', 'genial'];
console.log(longitudCadenaMasCorta(listaCadenas));


// 10.-Escribe una función que revise si una cadena de texto es un palíndromo o no.
function esPalindromo(cadena) {
  // Convertir la cadena a minúsculas y eliminar los espacios en blanco
  cadena = cadena.toLowerCase().replace(/\s/g, '');

  // Comparar la cadena original con su reverso
  for (let i = 0; i < cadena.length / 2; i++) {
    if (cadena[i] !== cadena[cadena.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
//Regresa true si es un palindromo y Falso si no lo es
const cadena1 = 'radar';
const cadena2 = 'oso';
const cadena3 = 'Hola mundo';

console.log(esPalindromo(cadena1)); 
console.log(esPalindromo(cadena2));
console.log(esPalindromo(cadena3)); 


// 11.- Funcion para ordenar alfabeticamente las cadenas de texto en una lista

let alphUnorderedList = ["Juan", "Pablo", "Pedro", "Angel", "Jose", "Octavio"];

function alphSortList(lst) 
{
  for (let i = 1; i < lst.length; i++) 
  {
    let selected = lst[i];
    let n = i - 1;
    while (n >= 0 && lst[n] > selected) 
    {
      lst[n + 1] = lst[n];
      n--;
    }
    lst[n + 1] = selected;
  }
  return lst;
}
console.log("\nlista desordenada: \n", alphUnorderedList)
const alphOrderedList = alphSortList(alphUnorderedList);
console.log("\nLista ordenada:\n",alphOrderedList);

// 12.- Escribe una función que tome una lista de números y devuelva la mediana y la moda.
//Ejercicio Mediana y Moda
function medianaYModa(lista) {
  // Ordena la lista de números en orden ascendente
  lista.sort(function(a, b){return a - b});

  // Calcula la mediana
  let mediana = 0;
  let longitud = lista.length;
  if (longitud % 2 === 0) {
    mediana = (lista[longitud/2 - 1] + lista[longitud/2]) / 2;
  } else {
    mediana = lista[(longitud - 1) / 2];
  }

  // Calcula la moda
  let contador = {};
  let maximo = 0;
  let moda = [];
  for (let i = 0; i < longitud; i++) {
    let numero = lista[i];
    if (contador[numero] === undefined) {
      contador[numero] = 0;
    }
    contador[numero]++;
    if (contador[numero] > maximo) {
      maximo = contador[numero];
      moda = [numero];
    } else if (contador[numero] === maximo) {
      moda.push(numero);
    }
  }

  // Devuelve un objeto con la mediana y la moda
  return { mediana: mediana, moda: moda };
}

let lista = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 9];
let resultado = medianaYModa(lista);
console.log(resultado.mediana); 
console.log(resultado.moda);

// 13.- Funcion pra determinar cual es la cadena mas frecuente dentro de una lista de cadenas de texto

const lst = ["perro", "gato", "jaguar", "perro", "elefante" ];

function FrequentString(stringList) 
{
    let accumulator = {};
    let frequencyNum = 0;
    let mostFrequentString = '';
  
    stringList.forEach(string => 
    {
      if (accumulator[string]) 
      {
        accumulator[string]++;
      } 
      else 
      {
        accumulator[string] = 1;
      }
  
      if (accumulator[string] > frequencyNum) 
      {
        frequencyNum = accumulator[string];
        mostFrequentString = string;
      }
    }
    );
    return [mostFrequentString, frequencyNum, accumulator];
  }
  
const mostFrequentData=FrequentString(lst)
console.log("\nValores de salida: \n\n| Cadena mas frecuente | Numero de repeticiones | Acumulador de todos los elementos | \n", mostFrequentData);


// 14.- Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.
function PotenciaDeDos(num){
  if(num<1){
      return false;
  }
  while(num > 1){
      if(num % 2 !== 0){
          return false;
      }
      num /= 2;
  }
  return true;
}

console.log('Actividad 14: ' + PotenciaDeDos(4));

// 15.- Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.
let list = [24, 36, 12, 5, 30, 99, 1];

function descendingArray(array) 
{
    let arraylength = array.length;
    for (let i = 0; i < arraylength - 1; i++) 
    {
      for (let n = i + 1; n < arraylength; n++) 
      {
        if (array[n] > array[i]) 
        {
          let temporal = array[i];
          array[i] = array[n];
          array[n] = temporal;
        }
      }
    }
    return array
  }
console.log("lista desordenada:\n", list)
const orderedList=descendingArray(list);
console.log("lista ordenada:", orderedList); 