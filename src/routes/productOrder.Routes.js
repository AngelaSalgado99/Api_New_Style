import {Router} from 'express';
import {showProductOrder, showProductOrderId, addProductOrder, updateProductOrder, deleteProductOrder} from '../controllers/productOrder.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = Router();
const apiName ='/ProductOrder';

router.route(apiName)
    .get(verifyToken,showProductOrder)
    .post(verifyToken,addProductOrder);

router.route(`${apiName}/:id`)
    .get(verifyToken,showProductOrderId)
    .put(verifyToken,updateProductOrder)
    .delete(verifyToken,deleteProductOrder);
 
export default router;
