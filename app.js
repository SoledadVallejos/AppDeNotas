let moduloTareas = require('./tareas')

let process = require('process')
let comando = process.argv[2] ? process.argv[2].toLowerCase() : undefined

switch (comando) {
    case "listar":
        let tareas = moduloTareas.leerJSON();
        if (tareas.length === 0) {
            console.log("La lista de tareas esta vacia")
        } else {
            console.log("----------------------------")
            console.log("Este es tu listado de tareas")
            console.log("----------------------------")
            tareas.forEach((tarea, i) => {
                console.log(`${i+1} Titulo ${tarea.titulo}  - Estado ${tarea.estado}`);
            });
        }
        break;

    case undefined:
        console.log("Atencion - Tienes que pasar una accion");
        break;

    default:
        console.log("No entiendo que quieres hacer");
        break;
}