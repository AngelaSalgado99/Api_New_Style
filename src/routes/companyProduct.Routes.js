import {Router} from 'express';
import {showCompanyProduct, showCompanyProductId, addCompanyProduct, updateCompanyProduct, deleteCompanyProduct} from '../controllers/companyProduct.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';


const router = Router();
const apiName ='/CompanyProduct';

router.route(apiName)
    .get(verifyToken,showCompanyProduct)
    .post(verifyToken,addCompanyProduct);

router.route(`${apiName}/:id`)
    .get(verifyToken,showCompanyProductId)
    .put(verifyToken,updateCompanyProduct)
    .delete(verifyToken,deleteCompanyProduct);
 
export default router;
