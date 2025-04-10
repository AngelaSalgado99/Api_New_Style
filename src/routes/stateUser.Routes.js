import {Router} from 'express';
import {showStateUser, showStateUserId, addStateUser, updateStateUser, deleteStateUser} from '../controllers/stateUser.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = Router();
const apiName ='/StateUser';

router.route(apiName)
    .get(verifyToken,showStateUser)
    .post(verifyToken,addStateUser);

router.route(`${apiName}/:id`)
    .get(verifyToken,showStateUserId)
    .put(verifyToken,updateStateUser)
    .delete(verifyToken,deleteStateUser);
 
export default router;
