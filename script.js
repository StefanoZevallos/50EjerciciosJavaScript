// 1 .- Ejercicio de bucles:
//Escribe un bucle que imprima los números del 1 al 10 en la consola

for (let i = 0; i <= 10; i++) {
    console.log(i);
  }

// 2.- Ejercicio de condicionales:
//Escribe una función que tome un número como argumento y devuelva "Es par" si el número es par, y "Es impar" si el número es impar. 

function SaberSiEsPar (numero) {
    if (numero % 2 == 0 ) {
        console.log("Es par")
    }
    else { 
        console.log("Es impar")
    }
}

SaberSiEsPar(200)

//3 .- Ejercicio de map:
//Dado un arreglo de números, utiliza el método map para crear un nuevo arreglo que contenga el cuadrado de cada número(sin usar Math.pow()).

const arregloMap = [ 1,2, 3 ,4 ,5 ,6, 7,8,9,10]
const arregloCuadrado = arregloMap.map(numero=>numero*numero)
console.log(arregloCuadrado)

//4.-Ejercicio de filter:
//Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números pares.

const arregloFilter = [ 1,2, 3 ,4 ,5 ,6, 7,8,9,10]
const arregloPares = arregloFilter.filter(numero => !(numero % 2))
console.log(arregloPares)

//5.- Ejercicio de reduce:
//Dado un arreglo de números, utiliza el método reduce para calcular la suma de todos los elementos del arreglo.

const arregloReduce = [ 1,2, 3 ,4 ,5 ,6, 7,8,9,10]
const arregloReducido = arregloReduce.reduce((a,b) =>{
    return a + b ;
})
console.log(arregloReducido)

// 6.- Ejercicio combinado:
// Dado un arreglo de palabras, utiliza un bucle y condicionales para crear un nuevo arreglo que contenga solo las palabras que tienen más de 5 caracteres. 
// Luego, utiliza el método map para convertir cada palabra en mayúsculas

const arregloEjercicio6 = ["Manzana","Pera","Tomate","Stefano","Juan","Luis","José","Pepe","Papa","Pato"]
const arregloEjercicio6Resultado = []
    for (let i=0; i<arregloEjercicio6.length;i++){
        if (arregloEjercicio6[i].length < 5) {
            arregloEjercicio6Resultado.push(arregloEjercicio6[i])
        }
    } 
arregloEjercicio6ResultadoMayusculas = arregloEjercicio6Resultado.map(elemento => elemento.toUpperCase())    
console.log(arregloEjercicio6ResultadoMayusculas)

// 7.- Ejercicio combinado:
// Dado un arreglo de objetos que representan productos, utiliza el método filter para crear un nuevo arreglo 
// que contenga solo los productos que están en stock (es decir, aquellos cuya propiedad stock sea verdadera). 
// Luego, utiliza el método reduce para calcular el precio total de todos los productos en stock.

const arregloEjer7 = [{producto:"Cocina",stock:true, precio:15},{producto:"Refrigeradora",stock:true,precio:10},{producto:"Computadora",stock:false,precio:20}]
const arregloEjer7Filter = arregloEjer7.filter(objeto => objeto.stock)

const arreglo7Reduce= arregloEjer7Filter.reduce ((a,b) =>  {
    return a.precio + b.precio
})
console.log(arreglo7Reduce)
// 8 .- Ejercicio combinado:
// Dado un arreglo de nombres, utiliza el método map para crear un nuevo arreglo que contenga solo los nombres que comienzan con la letra "A". 
// Luego, utiliza el método reduce para concatenar todos los nombres en una sola cadena separada por comas.

const arregloEjer8 = ["Anita","Alibaba","Mario","Luyan","José","Timoteo","Anuel","Antonio","Alberto"]

const arregloEjer8Map = arregloEjer8.map(nombre => { 
    if (nombre.charAt(0)=="A") {
        return nombre
    }
})   
.filter(nombre => nombre !== undefined)    
const arregloEjer8Reduce = arregloEjer8Map.reduce((a,b)=>
{   return a + ", " + b }  )
console.log(arregloEjer8Reduce); 

// 9.- Ejercicio de bucles:
// Escribe un bucle que imprima los números del 10 al 1 en la consola, en orden descendente.

let arr = []
for (let i=1;i<=10;i++) {
    arr.push(i)
}
console.log(arr.reverse())

for (let i=10;i>=1;i--) {
    console.log(i);
}

// 10 .- Escribe una función que tome un número como argumento y devuelva "Positivo" si el número es mayor que 0, 
//"Negativo" si el número es menor que 0, y "Cero" si el número es igual a 0.

function igualA(numero) {
    if(numero>0) {
        console.log("Positivo");
    }
    else if(numero<0) {
        console.log("Negativo")
    }
    else {
        console.log("Cero")
    }
}

// 11 .- Ejercicio de map:
// Dado un arreglo de palabras, utiliza el método map para crear un nuevo arreglo que contenga la longitud de cada palabra.

const arrayEjercicio11 = ["Manzana","Museo","Soledad","Programacion","Irrespeto","JavaScript"]
const arrayEjercicio11Map = arrayEjercicio11.map(palabra => palabra.length)
console.log(arrayEjercicio11Map)

// 12 .- Ejercicio de filter:
// Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números mayores que 5.

const arrayEjercicio12 = [1,2,3,4,5,6,7,8,9,10]
const arrayEjercicio12Filter = arrayEjercicio12.filter(numero => numero>5)
console.log(arrayEjercicio12Filter);

// 13 .- Ejercicio de reduce:
// Dado un arreglo de números, utiliza el método reduce para calcular el producto de todos los elementos del arreglo.

const arrayEjercicio13 = [1,2,3,4,5,6,7,8,9,10]
const arrayEjercicio13Reduce = arrayEjercicio13.reduce((a,b)=>{
    return a*b
}  )
console.log(arrayEjercicio13Reduce)

//14 .- Ejercicio combinado:
//Dado un arreglo de objetos que representan estudiantes, utiliza el método filter para crear un nuevo arreglo que contenga solo 
//los estudiantes que tienen una calificación mayor o igual a 80. 
//Luego, utiliza el método map para crear un nuevo arreglo que contenga solo los nombres de esos estudiantes.

const arrayEjer14 = [{nombre:"Stefano",nota:50},{nombre:"Pedro",nota:90},{nombre:"Julian",nota:95},{nombre:"Mario",nota:60}]
const arrayEjer14Filter = arrayEjer14.filter(variable => variable.nota>80)
const arrayEjer14Map = arrayEjer14Filter.map(variable => variable.nombre)
console.log(arrayEjer14Map)

//15 .- Ejercicio combinado:
// Dado un arreglo de palabras, utiliza el método filter para crear 
// un nuevo arreglo que contenga solo las palabras que contienen la letra "a". 
// Luego, utiliza el método map para convertir cada palabra en minúsculas.

const arrayEjer15 = ["Almendra","Aguila","Albondiga","Maremoto","LoremIpsum"]
const arrayEjer15Filter = arrayEjer15.filter(variable=>variable.startsWith("A"))
const arrayEjer15Map=arrayEjer15Filter.map(variable=>variable.toLowerCase())
console.log(arrayEjer15Map)

//16 .- Ejercicio combinado:
// Dado un arreglo de objetos que representan libros, 
// utiliza el método filter para crear un nuevo arreglo que contenga solo los libros cuyo autor sea "J.K. Rowling".
//  Luego, utiliza el método reduce para calcular la suma de las páginas de todos los libros seleccionados.

const arrayEjer16 = [{libro:"Harry Potter", paginas:250 , Autor :"J.K. Rowling"},
{libro:"Harry Potter 2", paginas:500, Autor :"J.K. Rowling"},
{libro:"20 fabulas para programadores", paginas:300, Autor:"Kiko Palomares"},
{libro:"No Todo es Programar", paginas:150, Autor:"Kiko Palomares"}]

const arrayEjer16Filter = arrayEjer16.filter(variable=>variable.Autor==="J.K. Rowling")
const arrayEjer16Reduce = arrayEjer16Filter.reduce((a,b) => {
    return a.paginas + b.paginas
})
console.log(arrayEjer16Reduce)

//17 .- Ejercicio de bucles:
// Escribe un bucle que imprima los números pares del 1 al 20 en la consola.

for (let i=1 ; i<=20 ; i++) {
    if (!(i%2)) {
        console.log(i);
    }
}

//18 .- Ejercicio de condicionales:
// Escribe una función que tome una cadena como argumento y devuelva 
// "Es una frase" si la cadena contiene espacios en blanco, y "Es una palabra" si la cadena no contiene espacios en blanco.

function esUna(texto) {
    if(texto.includes(' ')) {
        console.log("Es una frase")
    }
    else {
        console.log("Es una palabra")
    }
}

esUna("Me llegue a confundir con ella tanto")

//19 .- Ejercicio de map:
// Dado un arreglo de nombres, utiliza el método map para crear un nuevo arreglo que contenga solo los nombres en mayúsculas.

const arrayEjer19 = ["STEFANO","Felipe","Antonio","Pedro","VICTOR"];

const arrayEjer19MapFilter = arrayEjer19.map(nombre => 
    {if (nombre===nombre.toUpperCase()) {
        return nombre}})
    .filter(nombre=>nombre !== undefined)
  
console.log(arrayEjer19MapFilter); 

// 20 .- Ejercicio de filter:
// Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números impares.

const arrayEjer20 = [1,2,3,4,5,6,7,8,9,10]
const arrayEjer20Filter = arrayEjer20.filter(numero=> numero%2)
console.log(arrayEjer20Filter);

// 21 .- Dado un arreglo de palabras, utiliza el método reduce para calcular la 
// cantidad total de caracteres de todas las palabras en el arreglo.

const arrayEjer21 = ["Cabestro","Mesita","Recodo","Fresco"]
const arrayEjer21Reduce = arrayEjer21.reduce((acumulador,palabra)=> {
    return acumulador + palabra.length},0)
console.log(arrayEjer21Reduce);

// 22 .- Ejercicio combinado:
// Dado un arreglo de objetos que representan productos, utiliza el método filter para crear un nuevo arreglo 
// que contenga solo los productos cuyo precio sea mayor a $50. 
// Luego, utiliza el método map para crear un nuevo arreglo que contenga solo los nombres de esos productos.

const arrayEjer22 = [{producto:"Tetera",precio:60},{producto:"Cocina",precio:70},{producto:"Televisión",precio:40}]
const arrayEjer22Filter = arrayEjer22.filter(elemento => elemento.precio>50)
const arraryEjer22Map = arrayEjer22Filter.map(elemento => elemento.producto)
console.log(arraryEjer22Map);

// 23 .- Ejercicio combinado:
// Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que 
// contenga solo los números que sean múltiplos de 3.
//  Luego, utiliza el método reduce para calcular la suma de los números seleccionados.

const arrayEjer23 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
const arrayEjer23Filter = arrayEjer23.filter(elemento=>!(elemento%3))
const arrayEjer23Map = arrayEjer23Filter.reduce((a,b)=>{
    return a + b
},0)
console.log(arrayEjer23Map);

// 24 .- Ejercicio combinado:
// Dado un arreglo de objetos que representan estudiantes, utiliza el método filter para crear un nuevo arreglo 
// que contenga solo los estudiantes que tienen una calificación promedio mayor o igual a 90.
//  Luego, utiliza el método reduce para calcular el promedio de las calificaciones de los estudiantes seleccionados.

const arrayEjer24 = [{nombre:"Stefano",nota:20},{nombre:"Mario",nota:95},{nombre:"Gustavo",nota:98},{nombre:"Antonio",nota:95}]
const arrayEjer24Filter = arrayEjer24.filter(elemento=>elemento.nota > 90)
const arrayEjer24Reduce = arrayEjer24Filter.reduce((a,b) => {
    return (a + b.nota)},0)
const arrayEjer24Promedio = arrayEjer24Reduce/arrayEjer24.length   
console.log(arrayEjer24Promedio);

//25 .- Ejercicio de bucles:
// Escribe un bucle que imprima la serie de Fibonacci hasta el décimo término. 
// (La serie de Fibonacci comienza con 0 y 1, y cada término siguiente es la suma de los dos anteriores).

let num1 = 0;
let num2 = 1;

console.log(num1);
console.log(num2);

for (let i = 3; i <= 10; i++) {
  let nextNum = num1 + num2;
  console.log(nextNum);

  num1 = num2;
  num2 = nextNum;
}

//26 .- Ejercicio de condicionales:
// Escribe una función que tome una cadena como argumento y devuelva "Es un palíndromo" 
// si la cadena es igual al revés, y "No es un palíndromo" si no lo es.

function esPalindromo(cadena) {
    cadena = cadena.toLowerCase().replace(/\s/g, '');

    let reverso = cadena.split('').reverse().join('');

    if (cadena === reverso) {
      return "Es un palíndromo";
    } else {
      return "No es un palíndromo";
    }
  }

console.log(esPalindromo("Anita Lava la Tina"));  

//27 .- Ejercicio de map:
// Dado un arreglo de números, utiliza el método map 
// para crear un nuevo arreglo que contenga el doble de cada número.

const arrayEjer27 = [1,2,3,4,5,6,7,8,9]
const arrayEjer27Map = arrayEjer27.map(numero=> numero * 2)
console.log(arrayEjer27Map)

//28 .- Ejercicio de filter:
// Dado un arreglo de palabras, utiliza el método filter 
// para crear un nuevo arreglo que contenga solo las palabras que tengan más de 4 caracteres.

const arrayEjer28 = ["Palabra","Acción","Perro","Gato","Comida"]
const arrayEjer28Filter = arrayEjer28.filter(palabra => {
if (palabra.length>4) {
    return palabra
}
})
console.log(arrayEjer28Filter);

//29 .- Ejercicio de reduce:
//Dado un arreglo de números, utiliza el método reduce para calcular el producto de los números pares.  

const arrayEjer29 = [1,2,3,4,5,6];

const arrayEjer29Resultado = arrayEjer29.reduce((acumulador, numero) => {
  if (numero % 2 === 0) {
    const resultado = acumulador * numero;
    console.log(`Acumulador: ${acumulador}, Número: ${numero}, Resultado: ${resultado}`);
    return resultado;
  } else {
    return acumulador ;
  }
});

console.log(arrayEjer29Resultado)

//30 .- Ejercicio combinado:
// Dado un arreglo de objetos que representan empleados, utiliza el método filter para crear un nuevo arreglo que contenga 
// solo los empleados con un salario mayor a $5000.
//  Luego, utiliza el método map para crear un nuevo arreglo que contenga solo los nombres de los empleados seleccionados.

const arrayEjer30 = [{nombre:"Juan",salario:3000},{nombre:"Stefano",salario:9000},{nombre:"Miguel",salario:10000}]
const arrayEjer30Filter = arrayEjer30.filter(elemento => elemento.salario>5000)
const arrayEjer30Map = arrayEjer30Filter.map(elemento => elemento.nombre)
console.log(arrayEjer30Map);

//31 .- Ejercicio combinado:
// Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que 
// contenga solo los números que sean divisibles por 5 y mayores a 10. 
// Luego, utiliza el método reduce para calcular la suma de los números seleccionados.

const arrayEjer31 = [5,10,20,30,40,50,11,22,33,44,55]
const arrayEjer31Filter = arrayEjer31.filter(elemento => {
    if (elemento % 5 === 0 && elemento > 10) {
        return elemento
    }
 })
const arrayEjer31Reduce = arrayEjer31Filter.reduce((a,b)=> {
    return a + b
})
console.log(arrayEjer31Reduce);

//32 .- Ejercicio combinado:
// Dado un arreglo de objetos que representan productos, utiliza el método filter para crear un 
// nuevo arreglo que contenga solo los productos en stock con un precio menor a $100. 
// Luego, utiliza el método reduce para calcular el precio total de los productos seleccionados.

const arrayEjer32 = [{producto:"Lavadora",precio:10},{producto:"Licuadora",precio:30},{producto:"Computadora",precio:150},{producto:"Parlantes",precio:50}]
const arrayEjer32Filter = arrayEjer32.filter(elemento=>elemento.precio<100)
const arrayEjer32Reduce = arrayEjer32Filter.reduce((a,b)=> {
    return a + b.precio
},0)
 console.log(arrayEjer32Reduce);

//33 .- Ejercicio de bucles:
//Escribe un bucle que imprima los números impares del 1 al 50 en la consola.

for (let i=0; i<51 ;i++) {
    if(!(i%2===0)) {
        console.log(i)
    }
}

//34 .- Ejercicio de condicionales:
// Escribe una función que tome dos números como argumentos y devuelva el mayor de los dos.

function mayorQue(arg1,arg2) {
    if(arg1>arg2) {
        return arg1
    }
    else { 
        return arg2
    }
}

console.log(mayorQue(9,8))

//35 .- Ejercicio de map:
// Dado un arreglo de palabras, utiliza el método map para crear un nuevo arreglo que contenga la primera letra de cada palabra.

const arrayEjer35 = ["Hola", "Mundo", "JavaScript", "Map"];

const arrayEjer35Map = palabras.map(palabra => palabra[0]);

console.log(primeraLetra);

//36 .- Ejercicio de filter:
// Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números divisibles por 3

const arrayEjer36 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const arrayEjer36Filter = arrayEjer36.filter(numero => numero%3===0)
console.log(arrayEjer36Filter); 

//37 .- Ejercicio de reduce:
// Dado un arreglo de palabras, utiliza el método reduce para concatenar todas las palabras en una sola cadena.

const arrayEjer37 = ["Mateo","Mario","Pepe","Juan","Pelusin"]
const arrayEjer37Reduce = arrayEjer37.reduce((a,b)=> {
    return a  + b 
})
console.log(arrayEjer37Reduce);

//38 .- Ejercicio combinado:
// Dado un arreglo de objetos que representan estudiantes, utiliza el método filter para crear un nuevo arreglo que contenga 
// solo los estudiantes que tienen una calificación mayor a 90. 
// Luego, utiliza el método map para crear un nuevo arreglo que contenga solo los nombres y calificaciones de esos estudiantes.

const arrayEjer38 = [{estudiante:"Pepe",nota:100},{estudiante:"Juan",nota:95},{estudiante:"Stefano",nota:80}]
const arrayEjer38Filter = arrayEjer38.filter(elemento=>elemento.nota>90)
const arrayEjer38Map= arrayEjer38Filter.map(elemento=> {
    return (elemento.estudiante + ":Nota " +elemento.nota)
})
console.log(arrayEjer38Map);

//39 .- Ejercicio combinado:
// Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números positivos. 
// Luego, utiliza el método reduce para calcular la suma de los números seleccionados.

const arrayEjer39 = [-1,-2,-3,-4,-5,6,7,8,9,10]
const arrayEjer39Filter = arrayEjer39.filter(numero => numero>0)
const arrayEjer39Reduce = arrayEjer39Filter.reduce((a,b)=>{
    return a + b
})
console.log(arrayEjer39Reduce);

//40 .- Ejercicio combinado:
// Dado un arreglo de objetos que representan productos, utiliza el método filter para crear un nuevo arreglo 
// que contenga solo los productos con un precio mayor a $50. 
// Luego, utiliza el método reduce para calcular el promedio de los precios de los productos seleccionados.

const arrayEjer40 = [{producto:"Mochila",precio:10},{producto:"Mouse",precio:80},{producto:"Cuaderno",precio:60},{producto:"Martillo",precio:55},
{producto:"WebCam",precio:70}]
const arrayEjer40Filter = arrayEjer40.filter(elemento=>elemento.precio>50)
const arrayEjer40reduce= arrayEjer40Filter.reduce((a,b)=> {
    return a + b.precio
},0)/arrayEjer40Filter.length
console.log(arrayEjer40reduce);

//41 .- Ejercicio de funciones:
// Crea una función llamada saludar que tome un nombre como argumento y devuelva un mensaje de saludo, por ejemplo: "¡Hola, [nombre]!"

function saludar (nombre) {
    return (`¡Hola , ${nombre}!`)
}
 console.log(saludar("Stefano"))

//42 .-  Ejercicio de funciones flecha:
// Convierte la función saludar en una función flecha.

let saludar = (nombre) => (`¡Hola , ${nombre}!`)

console.log(saludar("Stefano"));

//43 .- Ejercicio de funciones anónimas:
// Crea una función anónima que tome dos números como argumentos y devuelva su suma.

let anonima= function(num1,num2) {
    return num1 + num2
}
console.log(anonima(9,8));

//44 .- Ejercicio de funciones:
// Crea una función llamada calcularPromedio que tome un arreglo de números como argumento y devuelva el promedio de esos números.

const arrayEjer44 = [11,4]
function calcularPromedio(arr) {
    return (arr[0] + arr[1])/arr.length
}

console.log(calcularPromedio(arrayEjer44));

//45 .- Ejercicio de funciones flecha:
// Convierte la función calcularPromedio en una función flecha.

const arrayEjer44Flecha = [11,4]
let calcularPromedioFlecha = (arr) => (arr[0] + arr[1])/arr.length 

console.log(calcularPromedioFlecha(arrayEjer44Flecha)); 

//46 .- Ejercicio de funciones anónimas:
// Crea una función anónima que tome un arreglo de palabras como argumento y devuelva un nuevo arreglo con la longitud de cada palabra.

const arrayEjer46 = ["Teclado","Parlante","Televisión"]
let funcionAnominaEjer46 = (arr) => arrayEjer46.map(elemento=>elemento.length)
console.log(funcionAnominaEjer46(arrayEjer46)); 

//47 .- Ejercicio de funciones:
// Crea una función llamada esPar que tome un número como argumento y devuelva true si el número es par, y false si no lo es.

function esPar(numero) {
    if(numero%2===0) {
        return true
    }
    else {
        return false
    }
}

console.log(esPar(12));

//48 .- Ejercicio de funciones flecha:
// Convierte la función esPar en una función flecha.


const ejer48 = (numero) =>  {if(numero%2===0) {
    return true
}
else {
    return false
}}

console.log(ejer48(9));  

//49 .- Ejercicio de funciones anónimas:
// Crea una función anónima que tome un arreglo de números como argumento y devuelva un nuevo arreglo con solo los números pares.

const arrayEjer49 = [1,2,3,4,5,6,7,8,9,10]
const ejer49 = function(arr) {
  return  arr.filter(elemento => elemento%2===0)
}
console.log(ejer49(arrayEjer49));



//50 .- Ejercicio de funciones:
// Crea una función llamada convertirAMayusculas que tome una cadena como argumento y devuelva la cadena en mayúsculas.



function convertirAMayusculas (nombre) {
    return nombre.toUpperCase()
}

console.log(convertirAMayusculas("Stefano"));