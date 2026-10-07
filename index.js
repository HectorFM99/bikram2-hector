// 1
let arrayVacio = [];


// 2
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// 3
let arrayNumerosPares = [0, 2, 4, 6, 8];


// 4
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];


// 5
function suma(a, b) {
  return a + b;
}


// 6
function potenciacion(a, b) {
  return Math.pow(a, b);
}


// 7
function separarPalabras(texto) {
  return texto.split(' ');
}


// 8
function repetirString(texto, veces) {
  let resultado = '';
  for (let i = 0; i < veces; i++) {
    resultado = resultado + texto;
  }
  return resultado;
}


// 9
function esPrimo(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}


// 10
function ordenarArray(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}


// 11
function obtenerPares(arr) {
  let pares = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      pares.push(arr[i]);
    }
  }
  return pares;
}


// 12
function pintarArray(arr) {
  return '[' + arr.join(', ') + ']';
}


// 13
function arrayMapi(arr, funcion) {
  let resultado = [];
  for (let i = 0; i < arr.length; i++) {
    resultado.push(funcion(arr[i]));
  }
  return resultado;
}


// 14
function eliminarDuplicados(arr) {
  let resultado = [];
  for (let i = 0; i < arr.length; i++) {
    if (!resultado.includes(arr[i])) {
      resultado.push(arr[i]);
    }
  }
  return resultado;
}


// 15
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];


// 16
let holaMundo = ['Hola', 'Mundo'];


// 17
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];


// 18
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];


// 19
function multiplicacion(a, b) {
  return a * b;
}

// 20
function division(a, b) {
  return a / b;
}

// 21
function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// 22
function resta(a, b) {
  return a - b;
}
let arrayFunciones = [suma, resta, multiplicacion];


// 23
function ordenarArray2(arr) {
  return arr.sort(function (a, b) {
    return b - a;
  });
}

// 24
function obtenerImpares(arr) {
  let impares = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      impares.push(arr[i]);
    }
  }
  return impares;
}

// 25
function sumarArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}

// 26
function multiplicarArray(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    total = total * arr[i];
  }
  return total;
}