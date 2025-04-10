import {Router} from 'express';
import {showIncome, showIncomeId, addIncome, updateIncome, deleteIncome} from '../controllers/Income.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';


const router = Router();
const apiName ='/Income';

router.route(apiName)
    .get(verifyToken,showIncome)
    .post(verifyToken,addIncome);

router.route(`${apiName}/:id`)
    .get(verifyToken,showIncomeId)
    .put(verifyToken,updateIncome)
    .delete(verifyToken,deleteIncome);
 
export default router;
