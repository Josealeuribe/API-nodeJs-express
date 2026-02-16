const db = require('../database/conexion.js');
class TeachersController {
    constructor() {

    }

    consultar(req, res) {
        res.json({msg: 'Consulta de profesores'})
    }

    ingresar(req, res) {
        res.json({msg: 'Ingresa Profesor'})
    }

    actualizar(req, res) {
        res.json({msg: 'Actualiza Profesor'})
    }   

    borrar(req, res) {
        res.json({msg: 'Borrar Profesor'})
    }

    consultarDetalle(req, res) {
        res.json({msg: 'Consultar detalle de Profesor'})
    }
};

module.exports = new TeachersController;