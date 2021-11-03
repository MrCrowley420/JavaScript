//DARK MODE CON JQUERY--------------------------------------------------------------------------------------------------

const darkMode = () => {
    $("body").css("background-color", "black")
    $("h1").css("color", "white")
    $("p").css("color", "white")

    localStorage.setItem("theme", "dark")
}
const lightMode = () => {
    $("body").css("background-color", "white")
    $("h1").css("color", "black")
    $("p").css("color", "black")
    localStorage.setItem("theme", "light")
}


$("#theme").on("click", () => {
        if (localStorage.getItem("theme") === "dark") {
            lightMode()
        } else {
            darkMode()
        }
    })
    //-----------------------------------------------------------------------------------------------------------------------------------
const url = "http://hp-api.herokuapp.com/api/characters";


$('#busqueda').prepend('<button id="btn">Mostrar Personajes</button>');

$('#btn').click(() => {


        $.get(url, (respuesta, estado) => {

            if (estado == "success") {

                for (let i = 0; i < respuesta.length; i++) {
                    if (respuesta[i].house == "Gryffindor") {

                        console.log(respuesta[i].name + " " + respuesta[i].house)

                        $("#respuesta").prepend(`
                        
                        <img src="${respuesta[i].image}" >
                        <p> Nombre: ${respuesta[i].name} </p>
                        <p> Casa: ${respuesta[i].house} </p>

                        `)
                    }
                }
            }




        })

    })
    //------------------------------------------------------------------------

/*     const url = "http://hp-api.herokuapp.com/api/characters";
    
    $("#busqueda").prepend('<button id="btn">Mostrar Personajes</button>');

    $("#btn").click (()=>{

        $.get(url, (repuesta, estado) => {
            if(estado == "success")


        })
    }) */