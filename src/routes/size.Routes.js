
import {Router} from 'express';
import {showSize, showSizeId, addSize, updateSize, deleteSize} from '../controllers/size.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = Router();
const apiName ='/Size';

router.route(apiName)
    .get(verifyToken,showSize)
    .post(verifyToken,addSize);

router.route(`${apiName}/:id`)
    .get(verifyToken,showSizeId)
    .put(verifyToken,updateSize)
    .delete(verifyToken,deleteSize);
 
export default router;
