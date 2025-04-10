import {Router} from 'express';
import {showColors, showColorsId, addColors, updateColors, deleteColors} from '../controllers/colors.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';


const router = Router();
const apiName ='/colors';

router.route(apiName)
    .get(verifyToken,showColors)
    .post(verifyToken,addColors);

router.route(`${apiName}/:id`)
    .get(verifyToken,showColorsId)
    .put(verifyToken,updateColors)
    .delete(verifyToken,deleteColors);
 
export default router;
