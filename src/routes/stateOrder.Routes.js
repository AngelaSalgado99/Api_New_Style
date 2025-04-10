import {Router} from 'express';
import {showStateOrder, showStateOrderId, addStateOrder, updateStateOrder, deleteStateOrder} from '../controllers/stateOrder.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = Router();
const apiName ='/StateOrder';

router.route(apiName)
    .get(verifyToken,showStateOrder)
    .post(verifyToken,addStateOrder);

router.route(`${apiName}/:id`)
    .get(verifyToken,showStateOrderId)
    .put(verifyToken,updateStateOrder)
    .delete(verifyToken,deleteStateOrder);
 
export default router;
