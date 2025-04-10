import {Router} from 'express';
import {showUpdateExit, showUpdateExitId, addUpdateExit, updateUpdateExit, deleteUpdateExit} from '../controllers/updateExit.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = Router();
const apiName ='/UpdateExit';

router.route(apiName)
    .get(verifyToken,showUpdateExit)
    .post(verifyToken,addUpdateExit);

router.route(`${apiName}/:id`)
    .get(verifyToken,showUpdateExitId)
    .put(verifyToken,updateUpdateExit)
    .delete(verifyToken,deleteUpdateExit);
 
export default router;
