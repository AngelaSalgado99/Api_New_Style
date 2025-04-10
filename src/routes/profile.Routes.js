import {Router} from 'express';
import {showProfile, showProfileId, addProfile, updateProfile, deleteProfile} from '../controllers/profile.Controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = Router();
const apiName ='/Profile';

router.route(apiName)
    .get(verifyToken,showProfile)
    .post(verifyToken,addProfile);

router.route(`${apiName}/:id`)
    .get(verifyToken,showProfileId)
    .put(verifyToken,updateProfile)
    .delete(verifyToken,deleteProfile);
 
export default router;
