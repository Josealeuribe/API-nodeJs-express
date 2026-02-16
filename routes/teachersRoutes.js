const express = require('express');
const router = express.Router();
const teachersControllers = require('../controllers/teachersControllers.js');

router.get('/', teachersControllers.consultar);

router.post('/', teachersControllers.ingresar);

router.route('/:id')
    .get(teachersControllers.consultarDetalle)
    .put(teachersControllers.actualizar)
    .delete(teachersControllers.borrar)

module.exports = router;