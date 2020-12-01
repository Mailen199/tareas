let fs = require('fs')// requiero file system
let process = require('process');// requiero process
const { guardarJSON } = require('./tareas');

let moduloTareas = require('./tareas');

//console.log(moduloTareas.leerJSON);
let comando = process.argv[2]

switch (comando) {
    case 'listar':
        let tareas = moduloTareas.leerJSON()
        if (tareas.length == 0) {
            console.log("----------------------------");
            console.log("--Listado de tareas -Vacio--");
            console.log("----------------------------");
        } else {
            console.log("----------------------------");
            console.log("Este es tu listado de tareas");
            console.log("----------------------------");
            for (let i = 0; i < tareas.length; i++) {
                console.log("Titulo: " + tareas[i].titulo + "  -Estado: " + tareas[i].estado);
            }
        }

        break;
    case 'agregar':
        let titulo = process.argv[3];
        let estado = process.argv[4];
        moduloTareas.escribirJSON(titulo, estado);
        break;
    case 'borrar':
        moduloTareas.borrarJSON()
        break;
    case 'cambiar':

        break;
    case 'buscar':
        let resultado = moduloTareas.buscarJSON(process.argv[3]);
        if (resultado.length === 0) {
            console.log("------------------------------");
            console.log("No hay elementos que coincidan");
            console.log("------------------------------");
        } else {
            resultado.forEach(tarea => {
                console.log(tarea);
            });
        }
        break;

    default:
        break;
}