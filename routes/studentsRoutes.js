const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsControllers.js');

router.get('/', studentsController.consultar);

router.post('/', studentsController.ingresar);

router.route('/:id')
    .get(studentsController.consultarDetalle)
    .put(studentsController.actualizar)
    .delete(studentsController.borrar)

module.exports = router;