const db = require('../database/conexion.js');
class StudentsController {
    constructor() {

    }

    consultar(req, res) {
        try {
            db.query(`SELECT * FROM students`,
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
            const { dni, nombre, apellido, email } = req.body
            db.query(`INSERT INTO students 
                        (id, dni, nombre, apellido, email)
                        VALUES (NULL, ?, ?, ?, ?);`, 
                    [ dni, nombre, apellido, email ], (err, rows) => {
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
            const { dni, nombre, apellido, email } = req.body
            db.query(`UPDATE cursos.students SET dni = ?, nombre = ?, apellido = ?, email = ? WHERE id = ?`,
                    [ dni, nombre, apellido, email, id ], (err, rows) => {
                        if (err) {
                            res.status(400).send(err);
                        }
                        res.status(201).json(rows);
                    });
        } catch(err) {
            res.status(500).send(err.message);
        }

    }   

    borrar(req, res) {
        res.json({msg: 'Borrar estudiante'})
    }

    consultarDetalle(req, res) {
        const { id } = req.params;
        try {
            db.query(`SELECT * FROM students WHERE id = ?`, [id],
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

module.exports = new StudentsController;