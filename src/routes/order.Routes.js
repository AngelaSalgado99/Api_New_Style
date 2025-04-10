import {Router} from 'express';
import {showOrder, showOrderId, addOrder, updateOrder, deleteOrder} from '../controllers/order.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';


const router = Router();
const apiName ='/Order';

router.route(apiName)
    .get(verifyToken,showOrder)
    .post(verifyToken,addOrder);

router.route(`${apiName}/:id`)
    .get(verifyToken,showOrderId)
    .put(verifyToken,updateOrder)
    .delete(verifyToken,deleteOrder);
 
export default router;
