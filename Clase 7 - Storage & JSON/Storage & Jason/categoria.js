let listaObjetos;

if (localStorage.getItem("lista") == null) {
    alert("No tenes productos para mostrar")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("lista"))
}

let dato = prompt("Ingresa tu categoria")
listaFiltrada = listaObjetos.filter(e => e.categoria === dato)


if (listaFiltrada.length != 0) {
    listaFiltrada.forEach(element => {
        console.log(element.nombre + " " + element.categoria);
    });
} else {
    console.log("No tenes ningun producto en esa categoria");
}

const comprar = (dato) => {
    let carrito;
    if (localStorage.getItem("carrito") == null) {
        carrito = []
    } else {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
    carrito.push(dato)
    localStorage.setItem("carrito", JSON.stringify(carrito))
}