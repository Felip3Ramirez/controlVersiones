//map(): transforma los elementos de un arreglo
var num = [1,2,3,4,5]
var num2 = num.map(num => num * 1)  
console.log(num2);

//find(): busca un elemento que cumpla una condición.
var personas = [
    {nombre : "Ana",edad:17},
    {nombre : "Luis",edad:20},
    {nombre : "Marta",edad:15},
    {nombre : "Pedro",edad:22}
]
var persona2 =personas.find(persona => persona.edad>18)
console.log(persona2);

//filter(): filtra elementos que cumplen con una condición.
const numerosp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numerosp.filter(num => num % 2 === 0);
console.log(pares);

//some(): verifica si al menos un elemento cumple con una condición.
const numeros = [1, 2, 3, 4, 5, 11];
const dobleNumeros = numeros.some(numeros=>numeros > 10)
console.log(dobleNumeros);

//forEach(): ejecuta una función para cada elemento del arreglo.
const nombres = ['Juan', 'María', 'José', 'Laura'];
nombres.forEach(nombres => console.log(nombres));

//push(): agrega elementos al final del arreglo.
const miArreglo = [];
miArreglo.push("maria","marta","mario")
console.log(miArreglo);

//pop(): elimina el último elemento del arreglo.
const frutas = ['manzana', 'banana', 'naranja', 'uva'];
var menos1 = frutas.pop()
console.log(frutas);
console.log(menos1);

//slice(): obtiene una porción del arreglo.
const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const letras2 = letras.slice(0, 3)
console.log(letras2);

//shift(): eimina el primer elemento de un array
let nombres = ["Juan", "María", "Pedro", "Ana", "Luis"];
let primerNombre = nombres.shift();
console.log("Nombre eliminado:", primerNombre);
console.log("Array resultante:", nombres);

//unshift (): agrega elementos al inicio de un array
let frutas = [];
frutas.unshift("Manzana");
frutas.unshift("Banana");
frutas.unshift("Naranja");
console.log("Array de frutas:", frutas);








