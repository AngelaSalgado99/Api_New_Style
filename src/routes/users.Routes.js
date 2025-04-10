// routes/users.Routes.js
import { Router } from 'express';
import { showUsers, showUsersId, addUsers, updateUsers, deleteUsers } from '../controllers/users.Controller.js';

const router = Router();
const apiName = '/users';

// Rutas CRUD existentes
router.route(apiName)
    .get(showUsers) // Obtener todos los usuarios
    .post(addUsers); // Crear un nuevo usuario

router.route(`${apiName}/:id`)
    .get(showUsersId) // Obtener un usuario por ID
    .put(updateUsers) // Actualizar un usuario por ID
    .delete(deleteUsers); // Eliminar un usuario por ID


export default router;