import {Router} from 'express';
import {showPaymentMethod_Order, showPaymentMethod_OrderId, addPaymentMethod_Order, updatePaymentMethod_Order, deletePaymentMethod_Order} from '../controllers/paymentMethod_Order.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';


const router = Router();
const apiName ='/PaymentMethod_Order';

router.route(apiName)
    .get(verifyToken,showPaymentMethod_Order)
    .post(verifyToken,addPaymentMethod_Order);

router.route(`${apiName}/:id`)
    .get(verifyToken,showPaymentMethod_OrderId)
    .put(verifyToken,updatePaymentMethod_Order)
    .delete(verifyToken,deletePaymentMethod_Order);
 
export default router;
