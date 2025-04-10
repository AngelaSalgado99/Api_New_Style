import {Router} from 'express';
import {showBill, showBillId, addBill, updateBill, deleteBill} from '../controllers/bill.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';


const router = Router();
const apiName ='/Bill';

router.route(apiName)
    .get(verifyToken,showBill)
    .post(verifyToken,addBill);

router.route(`${apiName}/:id`)
    .get(verifyToken,showBillId)
    .put(verifyToken,updateBill)
    .delete(verifyToken,deleteBill);
 
export default router;
