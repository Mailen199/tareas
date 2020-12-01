let fs = require('fs');
let tareasJSON = JSON.parse(fs.readFileSync('./tareas.json', 'utf-8'))


module.exports = moduloTareas = {
    archivo: './tareas.json',
    leerJSON: function () {
        return tareasJSON;
    },
    escribirJSON: function (titulo, estado) {
        let nuevaTarea = {
            titulo: titulo,
            estado: estado == undefined ? 'Pendiente' : estado,
        }
        tareasJSON.push(nuevaTarea);
        console.log(tareasJSON);

        this.guardarJSON(tareasJSON);
    },
    guardarJSON: function (informacion) {
        let nuevoJSON = JSON.stringify(informacion);
        fs.writeFileSync(this.archivo, nuevoJSON, 'utf-8');
        console.log('Guardado exitosamente');
    },
    borrarJSON: function () {
        tareasJSON.pop();
        moduloTareas.guardarJSON(tareasJSON);
    },
    buscarJSON: function (busqueda) {
        let tareasFiltradas = tareasJSON.filter(function (tarea) {
            return tarea.titulo.toLowerCase().includes(busqueda.toLowerCase())
        })
        return tareasFiltradas
    }
}