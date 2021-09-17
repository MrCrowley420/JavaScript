//constructor ---> nombre = valor

// let nombreAlumno = "Damian"
// let apellido = "Correa"
// let edad = 28

// const comision = 22405


//Operadores basicos +   -   /   *



// prompt nos sirve para guardar un dato desde el navegador con una ventana emergente


// let mensaje = prompt("What's app Nigga?");


//console.log()
//Este nos sirve para mostrar un mensaje en la consola

console.log("Mira que te como hermano")
    // console.log("Hola dos")
    // console.log("Hola tres")


//alert()
//Es para mostrar una alerta de forma abrupta

// alert("Mira que te como hermano")

let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");
let pelicula = prompt("Cual es tu pelicula favorita?");

console.log(nombre);
console.log(apellido);
console.log(pelicula);

let salida = nombre + " " + apellido + " " + pelicula;
alert(salida);


// console.log(nombre + " " + apellido + " " + pelicula);
// console.log(`${nombre} ${apellido} ${pelicula}`);


let numero1 = Number(prompt("Ingresa tu numero"));
let numero2 = Number(prompt("Ingresa tu numero"));


//convertir tipó de dato a otro tipo de dato es = a parsear
//Number() generico pasalo a numero      parseInt()   numeros enteros      parseFloat()  parsear a decimales
console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);