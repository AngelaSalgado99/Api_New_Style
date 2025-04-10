import {Router} from 'express';
import {showProducts, showProductsId, addProducts, updateProducts, deleteProducts} from '../controllers/products.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = Router();
const apiName ='/products';

router.route(apiName)
    .get(verifyToken,showProducts)
    .post(verifyToken,addProducts);

router.route(`${apiName}/:id`)
    .get(verifyToken,showProductsId)
    .put(verifyToken,updateProducts)
    .delete(verifyToken,deleteProducts);
 
export default router;
