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
    case "agregar":
        let titulo = process.argv[3];
        let estado = process.argv[4];
        moduloTareas.escribirJSON(titulo, estado);
        break;
    case "deshacer":
        moduloTareas.deshacerJSON()
        break;
    case "filtrar":
        let estado2 = process.argv[3];
        let tareasFiltradas = moduloTareas.filtrar(estado2);
        if (tareasFiltradas.length === 0) {
            console.log("La lista de tareas esta vacia")
        } else {
            console.log("----------------------------")
            console.log("Este es tu listado de tareas")
            console.log("----------------------------")
            for (let i = 0; i < tareasFiltradas.length; i++) {
                console.log("Título: " + tareasFiltradas[i].titulo + " - Estado: " + tareasFiltradas[i].estado);
            }
        }
        break;
    case "crear":
        let nombreTarea = process.argv[3];
        let nombreTitulo = {
            titulo: nombreTarea,
            estado: "pendiente"
        };
        moduloTareas.crear(nombreTitulo);
        break;
    case undefined:
        console.log("Atencion - Tienes que pasar una accion");
        break;

    default:
        console.log("No entiendo que quieres hacer");
        break;
}