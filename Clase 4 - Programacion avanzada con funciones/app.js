//   console.log("Desafio 4 ")

//   let unaResta = numero => numero - 10;

//   console.log(unaResta(100)) 
let producto = prompt("Cuantos quiere comprar?");
let precio1 = 250
let resultado = 0
let resultadoIva = 0
let iva = 1.21
let precioMayorista50 = 50
let resultadox50 = 0


function calcularPrecio(producto, precio1) {
    resultado = producto * precio1;
}

function mostrar(mensaje) {
    alert(mensaje);
}
calcularPrecio(producto, precio1);
mostrar(`El precio sin iva es  ${resultado}`);

function precioConIva(resultado, iva) {
    resultadoIva = resultado * iva;
}
precioConIva(resultado, iva);
mostrar(`El precio con iva es ${resultadoIva}`);

function precioMayorista(precio1, precioMayorista50) {
    resultadox50 = precio1 * precioMayorista50;
}
precioMayorista(precio1, precioMayorista50);
mostrar(`El precio mayorista por 50 es ${resultadox50} sin iva`);