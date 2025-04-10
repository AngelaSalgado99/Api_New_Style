import {Router} from 'express';
import {showAddress, showAddressId, addAddress, updateAddress, deleteAddress} from '../controllers/address.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = Router();
const apiName ='/address';

router.route(apiName)
    .get(verifyToken,showAddress)
    .post(verifyToken,addAddress);

router.route(`${apiName}/:id`)
    .get(verifyToken,showAddressId)
    .put(verifyToken,updateAddress)
    .delete(verifyToken,deleteAddress);
 
export default router;
