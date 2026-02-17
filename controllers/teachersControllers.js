const db = require('../database/conexion.js');
class teachersController {
    constructor() {

    }

    consultar(req, res) {
        try {
            db.query(`SELECT * FROM teachers`,
                        (err, rows) => {
                        if (err) {
                            res.status(400).send(err);
                        }
                        res.status(201).json(rows);
                    });

        } catch(err) {
            res.status(500).send(err.message);
        }
    }

    ingresar(req, res) {
        try {
            const { dni, nombre, apellido, email, profesion, telefono } = req.body
            db.query(`INSERT INTO teachers 
                        (id, dni, nombre, apellido, email, profesion, telefono )
                        VALUES (NULL, ?, ?, ?, ?, ?, ? );`, 
                    [ dni, nombre, apellido, email, profesion, telefono ], (err, rows) => {
                        if (err) {
                            res.status(400).send(err);
                        }
                        res.status(201).json( {id: rows.insertId });
                    });
        } catch(err) {
            res.status(500).send(err.message);
        }
    }

    actualizar(req, res) {
        const { id } = req.params;
        try {
            const { dni, nombre, apellido, email, profesion, telefono } = req.body
            db.query(`UPDATE cursos.teachers SET dni = ?, nombre = ?, apellido = ?, email = ?, profesion = ?, telefono = ? WHERE id = ?`,
                    [ dni, nombre, apellido, email, profesion, telefono, id ], (err, rows) => {
                        if (err) {
                            res.status(400).send(err);
                        } 
                        if (rows.affectedRows == 1)
                        res.status(200).json({ respuesta: 'Registro actualizado con exito'});
                    });
        } catch(err) {
            res.status(500).send(err.message);
        }

    }   

    borrar(req, res) {
        const { id } = req.params;
        try {
            db.query(`DELETE FROM teachers WHERE id = ?`, [id],
                    (err, rows) => {
                        if (err) {
                            res.status(400).send(err);
                        } 
                        if (rows.affectedRows == 1)
                        res.status(200).json({ respuesta: 'Registro eliminado con exito'});
                    });
        } catch(err) {
            res.status(500).send(err.message);
        }
    }

    consultarDetalle(req, res) {
        const { id } = req.params;
        try {
            db.query(`SELECT * FROM teachers WHERE id = ?`, [id],
                        (err, rows) => {
                            if (err) {
                            res.status(400).send(err);
                        }
                            res.status(201).json(rows);
                    });

        } catch(err) {
            res.status(500).send(err.message);
        }
    }
};

module.exports = new teachersController;