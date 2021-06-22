let fs = require('fs');

module.exports = moduloTareas = {
    leerJSON : () => {
        let datosJson = fs.readFileSync('./tareas.json', 'utf-8');
        return JSON.parse(datosJson);
    }
}
