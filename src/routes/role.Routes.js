import {Router} from 'express';
import {showRole, showRoleId, addRole, updateRole, deleteRole} from '../controllers/role.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = Router();
const apiName ='/role';

router.route(apiName)
    .get(verifyToken,showRole)
    .post(verifyToken,addRole);

router.route(`${apiName}/:id`)
    .get(verifyToken,showRoleId)
    .put(verifyToken,updateRole)
    .delete(verifyToken,deleteRole);
 
export default router;
