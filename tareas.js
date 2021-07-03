let fs = require('fs');

module.exports = moduloTareas = {
    leerJSON: () => {
        let listaDeTarea = fs.readFileSync('./tareas.json', 'utf-8');
        return JSON.parse(listaDeTarea);
    },
    escribirJSON: (titulo, estado) => {
        let nuevaTarea = {
            titulo: titulo,
            estado: estado,
        }
        let tareasAnteriores = moduloTareas.leerJSON();
        tareasAnteriores.push(nuevaTarea);
        moduloTareas.guardarJSON(tareasAnteriores);
    },
    guardarJSON: (info) => {
        let nuevoJSON = JSON.stringify(info, null, 2);
        fs.writeFileSync('./tareas.json', nuevoJSON, 'utf-8')
    },
    filtrar: (estado) => {
        let tareas = moduloTareas.leerJSON();
        let tareasFiltradas = tareas.filter(tarea => {
            return tarea.estado.toLowerCase() === estado.toLowerCase()

        })
        return tareasFiltradas

    },
    crear: (titulo) => {
        let traerJson = moduloTareas.leerJSON();
        traerJson.push(titulo);
        moduloTareas.guardarJSON(traerJson);
    }

}