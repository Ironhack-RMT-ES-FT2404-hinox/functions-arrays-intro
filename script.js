console.log("probando")



// declaración de la funcion
/* 
function nombreDeFuncion ( parametros: opcionalmente habran valores de entradas ) {

  el código que se ejecutará cuando yo active la funcion
  ...

  return opcionalmente valores de salida
}
*/

// invocación de la funcion
/* 
nombreDeFuncion( argumentos: opcionalmente estarán los valores de entrada )
*/




function saludarAAlguien( nombre, candy ) {
  // los parametros son cajitas/variables que almacenan los argumentos
  // console.log(nombre)

  console.log(`Hola ${nombre}. Aqui tienes ${candy} caramelitos`)

}

saludarAAlguien( "Ronnie", 10 )
saludarAAlguien( "Oriol", 5 )
saludarAAlguien( "Águeda", 8 )
saludarAAlguien( "Asier", 6 )
// saludarAAlguien()




function capitalizar( string ) {

  // console.log(string)
  let firstLetter = string[0].toUpperCase()
  let restOfWord = string.slice(1)
  let stringCap = firstLetter + restOfWord
  // console.log(stringCap)

  return stringCap
  // NO significa que la variable será accesible fuera de la funcion
  // SI significa que yo puede recibir la información por fuera de la funcion

}

let veggie1 = "patata"

let valorRetornado = capitalizar( veggie1 )
// la funcion hace dos cosas:
// 1. Ejecuta un código
// 2. me devuelve un valor 

let valorRetornado2 = capitalizar( "tomate" )

// let temp = capitalizar
// let valorRetornado3 = temp( "aguacate" )
// console.log(valorRetornado3)

console.log(`agregando ${valorRetornado} y ${valorRetornado2} a la lista de vegetales`)



// capitalizar() // da error



// formas de declarar/crear funciones

function funcionDeDeclaracion( ) {
  return "Soy una funcion de declaración"
}

const functionDeExpresión = function () {
  return "Soy una funcion de expresión"
}

const functionDeDeFlechita = () => {
  return "Soy una funcion de flechita"
}

funcionDeDeclaracion()
functionDeExpresión()
functionDeDeFlechita()



// Arrays


// puedo agregar CUALQUIER tipo de data como elementos del array
let unArray = [ "patata", 50, true, undefined, null, NaN, ["tomate"], { name: "bob" }, function(){/* ... */} ]

let matriz = [[], [], [], []]



let cities = [ "Madrid", "Granada", "Barcelona", "Oviedo", "Malaga", "Valencia" ]
console.log(cities)


// yo quiero saber la cantidad de elementos del array
console.log(cities.length)

// quiero la primera ciudad del array
console.log(cities[0])

// yo quiero el primer caracter del primer elemento
console.log(cities[0][0])
console.log(cities[0].charAt(0))
console.log(cities[0].slice(0,1))

// el primer caracter del ultimo elemento del array
console.log(cities[cities.length - 1].charAt(0))

// quiero el ultimo caracter de la ultima ciudad
let lastCity = cities[cities.length - 1]
console.log(lastCity)
// let lastCharacter = lastCity.charAt( lastCity.length - 1 )
let lastCharacter = lastCity[lastCity.length - 1]
console.log(lastCharacter)

// console.log( cities[cities.length - 1][cities[cities.length - 1].length - 1] )

// metodos de arrays


// indexOf, includes, slice


console.log( cities.indexOf("Oviedo") ) // 3
console.log( cities.indexOf("Berlin") ) // -1

console.log( cities.includes("Malaga") ) // true
console.log( cities.includes("Tokyo") ) // false

console.log( cities.slice(0, 1) ) // DEVUELVE UN ARRAY con las posiciones indicadas



// join y split

let string = "hola mundo como estas hoy?";

// let algo = string.split("") // convertir un string a un array
// let algo = string.split("o") // convertir un string a un array

let algo = string.split(" ") // convertir un string a un array
// el argumento define el separador a usar para crear el array
console.log(algo)


let array = ["patata", "tomate", "aguacate"]
let otraCosa = array.join(" - ")
console.log(otraCosa)



let username = "patricio"

let reversed = username.split("").reverse().join("")
console.log(reversed)



// mutabilidad en Javascript


let str = "hola";
console.log(str[0])

str[0] = "H"
str.toUpperCase()

console.log(str)
// JS s incapaz de modificar strings directamente
// data primitiva en JS es inmutable

str = capitalizar(str)
console.log(str)



let friends = ["Ross", "Monica", "Phoeby", "Joey", "Chandler", "Rachel"]

// console.log(friends[0])
friends[0] = "Mike";

console.log(friends)

friends.slice(2, 4) // no CORTAMOS, crear una copia
console.log(friends)


// los arrays son mutables, existen metodos que modificar el array. PERO no todos los metodos lo hacen.


// metodos que SI mutan array original


// quiero eliminar el ultimo elemento del array. .pop()

let removedElementLast = friends.pop() // REMUEVE el ultimo elemento
console.log(removedElementLast)
console.log("despues del pop", friends)

let removedElementFirst = friends.shift() // REMUEVE el primero elemento
console.log(removedElementFirst)
console.log("despues del shift", friends)


// agregar elementos

let elNuevoLength = friends.push( "Janice" ) // agrega al final
console.log(elNuevoLength)
console.log("despues del push", friends)

let elNuevoLength2 = friends.unshift( "Gunther" ) // agrega al inicio
console.log(elNuevoLength2)
console.log("despues del unshift", friends)

// para opciones de agregar y remover mas complejas .splice()

let removedElements = friends.splice( 2, 2, "Robert", "Emily" )
// 1 arg: posicion desde donde cortar
// 2 arg: la CANTIDAD de elementos a borrar
// 3 arg o mas: Los elementos que quiero agregar en la posición indicada

// si no queremos remover, le damos 0 al segundo argumento.

console.log("removedElements", removedElements)
console.log("despues del splice", friends)


let numbers = [ 10, 5, 20, "hola", "patata", 40, 2, true, null ]

// identificar los impostores y almacenarlos en otro array
let impostores = []
let onlyNumbers = []



for ( let i = 0; i < numbers.length; i++) {

  console.log(typeof numbers[i])
  if ( typeof numbers[i] === "number" ) {
    onlyNumbers.push(numbers[i])
  } else {
    impostores.push(numbers[i])
    // yo no deberia eliminar o agregar elementos de un array dentro del bucle por el cual estoy iterando
    // numbers.splice(i, 1)
    // i--
  }

}

console.log(impostores)
console.log(onlyNumbers)


let students = ["marcos", "alfonso", "ignacio", "xavi"]

// crear un nuevo array con los valores capitalizados

let studentsCap = []

// for (let i = 0; i < students.length; i++) {

//   // console.log(students[i])
//   let wordCap = students[i][0].toUpperCase() + students[i].slice(1)
//   console.log(wordCap)
//   studentsCap.push(wordCap)

// }


// forEach => ejecutar una funcion por cada elemento del array

students.forEach( function (oneStudent) {
  console.log(oneStudent)
  let wordCap = oneStudent[0].toUpperCase() + oneStudent.slice(1)
  console.log(wordCap)
  studentsCap.push( wordCap )
  
  // studentsCap.push( capitalizar(oneStudent) )
  // el metodo forEach no require que retornemos un valor
} )

console.log(studentsCap)



// Referencias


let age1 = 27;
let age2 = 27;

console.log(age1 === age2)


let agesArr1 = [22, 31, 50]; // ref 1234
let agesArr2 = [22, 31, 50]; // ref 5678

console.log(agesArr1 === agesArr2)


// en JS la data primitiva se compara por su valor
// en JS la data no primitiva (objetos, arrays, funciones) se comparan por su referencia


let agesArr3 = agesArr1; // JS asignar la misma referencia del agesArr1 al agesArr3. ref. 1234

agesArr3.pop()

console.log(agesArr3)
console.log("agesArr1", agesArr1)



// Ejemplo de todos los conceptos


let nombres = ["jasmine", "joel", "anna", "abigail", "bob", "patricio"]
let otrosNombres = ["ronnie", "marcos", "asier", "alfonso", "xavi"]

// crear una funcion que detecte la cantidad de nombres de un array que empiezan por una letra especifica

function quantityOfNamesThatStartWith (arrayOfNames, character) {

  // clausulas de guardia
  if (!arrayOfNames) {
    // si arrayOfNames es undefined, o null o vacio. DETEN LA FUNCION.
    console.log("el array no llegó")
    return "No has introducido un array" // el return detiene el resto de la ejecución.
  }

  if (arrayOfNames.length === 0) {
    return "array sin data" // el return detiene el resto de la ejecución.
  }

  // console.log(nombres) 
  // no deberiamos usar variables externas a la funcion. Deberiamos usar siempre los parametros.

  // console.log(arrayOfNames)
  // console.log(character)

  let counter = 0;

  for (let i = 0; i < arrayOfNames.length; i++) {
    if ( arrayOfNames[i][0] === character ) {
      // console.log(arrayOfNames[i])
      counter++
    }
  }

  // arrayOfNames.forEach(function (cadaNombre) {
  //   if ( cadaNombre[0] === character ) {
  //     // console.log(arrayOfNames[i])
  //     counter++
  //   }
  // })

  // console.log(counter)
  return counter

}

let cuenta = quantityOfNamesThatStartWith( nombres, "j" ) 
console.log(cuenta) // 2
let cuenta2 = quantityOfNamesThatStartWith( otrosNombres, "x" )
console.log(cuenta2)
let cuenta3 = quantityOfNamesThatStartWith([])
console.log(cuenta3)