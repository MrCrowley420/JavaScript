const obtenerInfo = (curso) => {
    cursos = {
        /*              0               1        2        3        4               */
        python: ["Profesor python", "Damian", "Lucas", "Juan", "EteSech"],
        javaScript: ["Profesor javaScript", "Damian", "Lucas", "Juan"],
        desarrolloWeb: ["Profesor desarrolloWeb", "Damian", "Juan", "EteSech"],
        nodeJs: ["Profesor nodeJS", "Lucas", "Juan", "EteSech"],
    }
    if (cursos[curso] !== undefined) {
        return [cursos[curso], curso];
    } else {
        return materias;
    }
}

const mostrarInfo = (curso) => {
    let informacion = obtenerInfo(curso);

    if (informacion !== false) {
        let profesor = obtenerInfo(curso)[0][0];

        let alumnos = obtenerInfo(curso)[0];
        alumnos.shift();

        console.log(`El profesor de ${informacion[1]} es: ${profesor} y sus alumnos son  ${alumnos}`);
    }
}


mostrarInfo("python");
mostrarInfo("javaScript");
mostrarInfo("desarrolloWeb");
mostrarInfo("nodeJs");