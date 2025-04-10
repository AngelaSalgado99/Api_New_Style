// controllers/users.Controller.js
import { connect } from '../config/database.js';
import bcrypt from 'bcrypt';

// Función para mostrar todos los usuarios
export const showUsers = async (req, res) => {
    try {
        let sqlQuery = "SELECT * FROM users";
        const [result] = await connect.query(sqlQuery);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Error fetching users", details: error.message });
    }
};

// Función para mostrar un usuario por ID
export const showUsersId = async (req, res) => {
    try {
        const [result] = await connect.query('SELECT * FROM users WHERE User_id = ?', [req.params.id]);
        if (result.length === 0) return res.status(404).json({ error: "User not found" });
        res.status(200).json(result[0]);
    } catch (error) {
        res.status(500).json({ error: "Error fetching user", details: error.message });
    }
};

// Función para agregar un nuevo usuario (CRUD)
export const addUsers = async (req, res) => {
    try {
        const { userName, userEmail, userPassword, roleId, stateUserId, CompanyId } = req.body;
        if (!userName || !userEmail || !userPassword || !roleId || !stateUserId || !CompanyId) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        let sqlQuery = "INSERT INTO users (User_name, User_mail, User_password, Role_id, State_user_id, Company_id) VALUES (?,?,?,?,?,?)";
        const [result] = await connect.query(sqlQuery, [userName, userEmail, userPassword, roleId, stateUserId, CompanyId]);
        res.status(201).json({
            data: [{ id: result.insertId, userName, userEmail, userPassword, roleId, stateUserId, CompanyId }],
            status: 201
        });
    } catch (error) {
        res.status(500).json({ error: "Error adding user", details: error.message });
    }
};

// Función para actualizar un usuario existente
export const updateUsers = async (req, res) => {
    try {
        const { userName, userEmail, userPassword, roleId, stateUserId, CompanyId } = req.body;
        if (!userName || !userEmail || !userPassword) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        let sqlQuery = "UPDATE users SET User_Name=?, User_mail=?, User_password=?, Role_id=?, State_user_id=?, Company_id=? WHERE User_id=?";
        const [result] = await connect.query(sqlQuery, [userName, userEmail, userPassword, roleId, stateUserId, CompanyId, req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ error: "User not found" });
        res.status(200).json({
            data: [{ userName, userEmail, userPassword, roleId, stateUserId, CompanyId }],
            status: 200,
            updated: result.affectedRows
        });
    } catch (error) {
        res.status(500).json({ error: "Error updating user", details: error.message });
    }
};

// Función para eliminar un usuario
export const deleteUsers = async (req, res) => {
    try {
        let sqlQuery = "DELETE FROM users WHERE User_id = ?";
        const [result] = await connect.query(sqlQuery, [req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ error: "User not found" });
        res.status(200).json({
            data: [],
            status: 200,
            deleted: result.affectedRows
        });
    } catch (error) {
        res.status(500).json({ error: "Error deleting user", details: error.message });
    }
};

