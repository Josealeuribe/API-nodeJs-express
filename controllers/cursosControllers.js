const db = require('../database/conexion.js');
class CursosController {
    constructor() {

    }

    consultar(req, res) {
        try {
            db.query(`SELECT * FROM cursos`,
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
            const { nombre, descripcion, teacher_id } = req.body
            db.query(`INSERT INTO cursos 
                        (id, nombre, descripcion, teacher_id)
                        VALUES (NULL, ?, ?, ?);`, 
                    [ nombre, descripcion, teacher_id], (err, rows) => {
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
            const { nombre, descripcion, teacher_id } = req.body
            db.query(`UPDATE cursos.cursos SET nombre = ?, descripcion = ?, teacher_id = ? WHERE id = ?`,
                    [ nombre, descripcion, teacher_id, id ], (err, rows) => {
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
            db.query(`DELETE FROM cursos WHERE id = ?`, [id],
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
            db.query(`SELECT * FROM cursos WHERE id = ?`, [id],
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

module.exports = new CursosController;