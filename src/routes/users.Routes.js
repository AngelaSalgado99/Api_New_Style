// routes/users.Routes.js
import { Router } from 'express';
import { showUsers, showUsersId, addUsers, updateUsers, deleteUsers } from '../controllers/users.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = Router();
const apiName = '/users';

// Rutas CRUD existentes
router.route(apiName)
    .get(verifyToken,showUsers) // Obtener todos los usuarios
    .post(verifyToken,addUsers); // Crear un nuevo usuario

router.route(`${apiName}/:id`)
    .get(verifyToken,showUsersId) // Obtener un usuario por ID
    .put(verifyToken,updateUsers) // Actualizar un usuario por ID
    .delete(verifyToken,deleteUsers); // Eliminar un usuario por ID


export default router;