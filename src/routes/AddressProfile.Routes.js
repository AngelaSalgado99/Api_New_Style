import {Router} from 'express';
import {showAddressProfile, showAddressProfileId, addAddressProfile, updateAddressProfile, deleteAddressProfile} from '../controllers/AddressProfile.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = Router();
const apiName ='/AddressProfile';

router.route(apiName)
    .get(verifyToken,showAddressProfile)
    .post(verifyToken,addAddressProfile);

router.route(`${apiName}/:id`)
    .get(verifyToken,showAddressProfileId)
    .put(verifyToken,updateAddressProfile)
    .delete(verifyToken,deleteAddressProfile);
 
export default router;
