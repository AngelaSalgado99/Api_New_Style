import {Router} from 'express';
import {showPaymentMethod, showPaymentMethodId, addPaymentMethod, updatePaymentMethod, deletePaymentMethod} from '../controllers/paymentMethod.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';


const router = Router();
const apiName ='/PaymentMethod';

router.route(apiName)
    .get(verifyToken,showPaymentMethod)
    .post(verifyToken,addPaymentMethod);

router.route(`${apiName}/:id`)
    .get(verifyToken,showPaymentMethodId)
    .put(verifyToken,updatePaymentMethod)
    .delete(verifyToken,deletePaymentMethod);
 
export default router;
