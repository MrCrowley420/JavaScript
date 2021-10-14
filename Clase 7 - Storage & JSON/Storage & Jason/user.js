//entidades

class User {

    constructor(nombre, pass) {
        this.nombre = nombre;
        this.pass = pass
    }
}

class Producto {
    constructor(nombre, categoria, precio, stock) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
}

const damian = new User("correa", "coderhouse")

let listaProductos;

if (localStorage.getItem("lista") == null) {
    listaProductos = []
} else {
    listaProductos = JSON.parse(localStorage.getItem("lista"))
}




const crearProducto = (nombre, categoria, precio, stock) => {
    const producto = new Producto(nombre, categoria, precio, stock)
    return producto
}





const confirmacionDeAcceso = () => {

    let bucle = true

    while (bucle) {
        const nombre = prompt("Ingrese su nombre");
        const pass = prompt("Ingresa tu password")

        if (nombre === damian.nombre && pass === damian.pass) {
            bucle = false

            let ciclo = true;

            while (ciclo) {
                const nombre = prompt("Ingrese el nombre del producto por favor");
                const categoria = prompt("Ingrese la categoria del producto por favor");
                const precio = Number(prompt("Ingrese el precio del producto por favor"));
                const stock = parseInt(prompt("Ingrese el stock del producto por favor"))

                listaProductos.push(crearProducto(nombre, categoria, precio, stock))

                localStorage.setItem("lista", JSON.stringify(listaProductos))

                ciclo = confirm("Deseas agregar otro mas?")

            }

            break;

        } else {
            alert("USUARIO INCORRECTO")
        }
    }
}
confirmacionDeAcceso()