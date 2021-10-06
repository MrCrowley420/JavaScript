/******************************************
 *          INCORPORAR   ARRAYS
 ******************************************/
class Producto {
    constructor(marca, modelo, precio) {

        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}
let motos = []

motos.push(new Producto("Honda", "Tornado", 680000))
motos.push(new Producto("Yamaha", "Xtz", 400000))
motos.push(new Producto("Honda", "R1", 1500000))
motos.push(new Producto("Gilera", "Smash", 150000))
motos.push(new Producto("Motomel", "Vergaiser", 50000))
motos.push(new Producto("Bajaj", "Rowser", 290000))
motos.push(new Producto("Super soco", "Cux", 600000))
motos.push(new Producto("Yamaha", "Crypton", 200000))
motos.push(new Producto("Royal Enfield", "Himalayan", 450000))
motos.push(new Producto("Ducati", "Monster", 6000000))
motos.push(new Producto("Royal Enfield", "Interceptor", 650000))
motos.push(new Producto("Harley Davidson", "Hate", 10000000))

const agregarMotos = () => {
    let marca = prompt("Ingresa la marca: ");
    let modelo = prompt("Ingrese el modelo: ");
    let precio = Number(prompt("Ingrese el precio"));

    let producto = new Producto(marca, modelo, precio)
    motos.push(producto)
}

motos.sort((a, b) => {
    if (a.precio > b.precio) {
        return 1
    }
    if (a.precio < b.precio) {
        return -1
    }
    return 0
})

console.log(motos);
let agregarMotoLista = agregarMotos(alert("Agregue una moto a la lista"));

for (let i = 0; i < motos.length; i++) {
    console.log(motos[i])
}


let search = prompt("Que marca queres buscar?")
let buscador = motos.filter(obj => obj.marca === search)
console.log(buscador);