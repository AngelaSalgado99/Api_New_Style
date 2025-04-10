import {Router} from 'express';
import {showCompany, showCompanyId, addCompany, updateCompany, deleteCompany} from '../controllers/company.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';


const router = Router();
const apiName ='/Company';

router.route(apiName)
    .get(verifyToken,showCompany)
    .post(verifyToken,addCompany);

router.route(`${apiName}/:id`)
    .get(verifyToken,showCompanyId)
    .put(verifyToken,updateCompany)
    .delete(verifyToken,deleteCompany);
 
export default router;
