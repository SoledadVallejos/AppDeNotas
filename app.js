let moduloTareas = require('./funcionesDeTarea')

let process = require('process')
let comando = process.argv[2] ? process.argv[2].toLowerCase() : undefined 

switch (comando) {
    case "listar":
         let tareas = moduloTareas.leerJSON();
             tareas.forEach( (tarea) => {
                 console.log( "Titulo: " + tarea.titulo + " -Estado: " + tarea.estado);
             });
        break;
    case undefined:
        console.log("Atencion - Tienes que pasar una accion");
    break;

    default:
        console.log("No entiendo que quieres hacer");
        break;
}