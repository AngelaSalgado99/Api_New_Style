import {Router} from 'express';
import {showBrand, showBrandId, addBrand, updateBrand, deleteBrand} from '../controllers/brand.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';


const router = Router();
const apiName ='/Brand';

router.route(apiName)
    .get(verifyToken,showBrand)
    .post(addBrand);

router.route(`${apiName}/:id`)
    .get(verifyToken,showBrandId)
    .put(verifyToken,updateBrand)
    .delete(verifyToken,deleteBrand);
 
export default router;
