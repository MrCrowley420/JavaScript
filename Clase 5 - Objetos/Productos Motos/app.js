/*****************************************************
 *              CLASES DE MENTIRA
 *****************************************************/
class Motos {
    constructor({
        marcaP = "Sin marca",
        modeloP = "Sin modelo",
        colorP = "Sin color",
        precioP = 0,
        stockP = 0,
        validoP,
    }) {
        this.marca = marcaP;
        this.modelo = modeloP;
        this.color = colorP;
        this.precio = precioP;
        this.stock = stockP;
        this.disponible = validoP;
    }

    comprar(cantidad) {
        if (this.stock <= 0) {
            console.log("No quedan mas unidades disponibles")
            this.disponible = false
        } else {
            this.stock = this.stock - cantidad
            console.log(`Compraste ${cantidad} ${this.modelo} de la marca ${this.marca} de color ${this.color}
            al precio de ${this.precio * cantidad}`);
        }
    }

}
/*****************************************************
 *      CONSTANTES, SELECTORES, VARIABLES GLOBALES
 *****************************************************/

const moto1 = new Motos({
    marcaP: "Royal Enfield",
    modeloP: "Himalayan",
    colorP: "Negro",
    precioP: 18000,
    stockP: 15,
    validoP: true,
})

const moto2 = new Motos({
    marcaP: "Honda",
    modeloP: "Tornado",
    colorP: "Rojo",
    precioP: 670000,
    stockP: 36,
    validoP: true,
})

/*****************************************************
 *                    LOGICA
 *****************************************************/

console.log(moto1.comprar(10));
alert(`Quedan ${moto1.stock} ${moto1.marca} ${moto1.modelo} en stock`);

console.log(moto2.comprar(25));
alert(`Quedan ${moto2.stock} ${moto2.marca} ${moto2.modelo} en stock`)