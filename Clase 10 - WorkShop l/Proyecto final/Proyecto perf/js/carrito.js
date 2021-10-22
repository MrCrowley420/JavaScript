let listaObjetos;
let imprimirDatos = document.getElementById("productosPrint")
let btn = document.getElementById("finalizarCompra")

if (localStorage.getItem("carrito") == null) {
    alert("El carrito se encuentra vacio")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("carrito"))
}

listaObjetos.forEach(element => {

    imprimirDatos.innerHTML += `
    
    <div class="card text-center col-4 m-3" style="width: 18rem;">
        <img src="./imagenesProductos/lamp1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${element.nombre}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${element.categoria}</h6>
            <p class="card-text">${element.precio}</p>
        </div>
    </div>
    
    
    `
});

const finalizarCompra = () => {
    let monto = 0

    listaObjetos.forEach(e => {
        monto += e.precio
    })
    console.log("Felicitaciones, tu compra fue finalizada. Gastaste " + monto);
    localStorage.clear("carrito")
}

btn.addEventListener("click", () => {
    finalizarCompra()
});