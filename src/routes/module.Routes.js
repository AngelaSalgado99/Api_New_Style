import {Router} from 'express';
import {showModule, showModuleId, addModule, updateModule, deleteModule} from '../controllers/module.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';


const router = Router();
const apiName ='/Module';

router.route(apiName)
    .get(verifyToken,showModule)
    .post(verifyToken,addModule);

router.route(`${apiName}/:id`)
    .get(verifyToken,showModuleId)
    .put(verifyToken,updateModule)
    .delete(verifyToken,deleteModule);
 
export default router;
