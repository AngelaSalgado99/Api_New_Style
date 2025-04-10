import {Router} from 'express';
import {showExitNs, showExitId, addExit, updateExit, deleteExit} from '../controllers/exit.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = Router();
const apiName ='/Exit';

router.route(apiName)
    .get(verifyToken,showExitNs)
    .post(verifyToken,addExit);

router.route(`${apiName}/:id`)
    .get(verifyToken,showExitId)
    .put(verifyToken,updateExit)
    .delete(verifyToken,deleteExit);
 
export default router;
