const db = require('../database/conexion.js');

class CursosController {
    constructor() {

    }

    consultar(req, res) {
        res.json({msg: 'Consulta de cursos'})
    }

    ingresar(req, res) {
        res.json({msg: 'Ingresar curso'})
    }

    actualizar(req, res) {
        res.json({msg: 'Actualizar curso'})
    }   

    borrar(req, res) {
        res.json({msg: 'Borrar curso'})
    }

    consultarDetalle(req, res) {
        res.json({msg: 'Consultar detalle de curso'})
    }
};

module.exports = new CursosController;