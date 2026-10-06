// 1
const arrayVacio = [];

// 2
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 3
const arrayNumerosPares = [0, 2, 4, 6, 8];

// 4
const arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

// 5
function suma(a, b) {
  return a + b;
}

// 6
function potenciacion(a, b) {
  return a ** b; 
}

// 7
function separarPalabras(texto) {
  return texto.split(' ');
}

// 8
function repetirString(texto, veces) {
  return texto.repeat(veces);
}

// 9
function esPrimo(numero) {
  if (numero < 2) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

// 10
function ordenarArray(array) {
  return [...array].sort((a, b) => a - b);
}

// 11
function obtenerPares(array) {
  return array.filter(n => n % 2 === 0);
}

// 12
function pintarArray(array) {
  return '[' + array.join(', ') + ']';
}

// 13
function arrayMapi(array, funcion) {
  return array.map(funcion);
}

// 14
function eliminarDuplicados(array) {
  return [...new Set(array)];
}

// 15
const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

// 16
const holaMundo = ['Hola', 'Mundo'];

// 17
const loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

// 18
const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

// 19
function multiplicacion(a, b) {
  return a * b;
}

// 20
function division(a, b) {
  return a / b;
}

// 21
function esPar(numero) {
  return numero % 2 === 0;
}

// 22
function resta(a, b) {
  return a - b;
}

const arrayFunciones = [suma, resta, multiplicacion];

// 23
function ordenarArray2(array) {
  return [...array].sort((a, b) => b - a);
}

// 24
function obtenerImpares(array) {
  return array.filter(n => n % 2 !== 0);
}

// 25
function sumarArray(array) {
  return array.reduce((total, n) => total + n, 0);
}

// 26
function multiplicarArray(array) {
  return array.reduce((total, n) => total * n, 1);
}