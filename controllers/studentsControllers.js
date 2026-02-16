const db = require('../database/conexion.js');
class StudentsController {
    constructor() {

    }

    consultar(req, res) {
        res.json({msg: 'Consulta de estudiantes'})
    }

    ingresar(req, res) {
        res.json({msg: 'Ingresa estudiante'})
    }

    actualizar(req, res) {
        res.json({msg: 'Actualiza estudiante'})
    }   

    borrar(req, res) {
        res.json({msg: 'Borrar estudiante'})
    }

    consultarDetalle(req, res) {
        res.json({msg: 'Consultar detalle de estudiante'})
    }
};

module.exports = new StudentsController;