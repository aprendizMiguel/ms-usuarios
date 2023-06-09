import { pool } from "../config/dataBase/db.js"

// MOSTRAR TODOS LOS DATOS
export const findAllUser = async (req, res) => {
    try {
        const [rows] = await pool.query("CALL spFindAllUser();");
        res.json(rows);
    } catch (error) {
        console.error("Ha ocurrido un error ");
    }
};

// MOSTRAR LOS DATOS POR ID
export const findUser = async (req, res) => {
    const id = req.params.id;
    try {
        const [rows] = await pool.query(`CALL spFindUser(${id});`);
        res.json(rows);
    } catch (error) {
        console.error("Ha ocurrido un error al mostrar");
    }
};

// INGRESAR USER
export const insertUser = async (req, res) => {
    const name = req.body.name;
    try {
        const result = await pool.query(`CALL spInsertUser('${name}');`);
        res.json(result);
    } catch (error) {
        console.error("Ha ocurrido un error al insertar" + error);
    }
};

// ACTUALIZAR INFO
export const updateUser = async (req, res) => {

    try {
        const id = req.params.id;
        const name = req.body.name;
        const result = await pool.query(`CALL spUpdateUser(${id}, '${name}');`);
        if (result[0].affectedRows != 0)
            res.json(result);
        else
            res.json({ "rs": "ERROR" })
    } catch (error) {
        console.error("Ha ocurrido un error al actualizar" + error);
    }
};
//ELIMINAR POR ID
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await pool.query(`CALL spDeleteUser(${id});`)
        if (result[0].affectedRows == 1)
            res.json(result);
        else
            res.json({ "ERROR": "NO BORRÓ" })

    } catch (error) {
        console.error(error);
    }
};