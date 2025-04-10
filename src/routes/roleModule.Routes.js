import {Router} from 'express';
import {showRoleModule, showRoleModuleId, addRoleModule, updateRoleModule, deleteRoleModule} from '../controllers/roleModule.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = Router();
const apiName ='/RoleModule';

router.route(apiName)
    .get(verifyToken,showRoleModule)
    .post(verifyToken,addRoleModule);

router.route(`${apiName}/:id`)
    .get(verifyToken,showRoleModuleId)
    .put(verifyToken,updateRoleModule)
    .delete(verifyToken,deleteRoleModule);
 
export default router;
