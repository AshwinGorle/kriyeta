import express from 'express';
import UserController from '../controllers/userController.js';
import checkUserAuth from '../middlewares/checkUserAuth.js';
import checkUserRole from '../middlewares/checkUserAuth.js';
import restrictToAdmin from '../middlewares/restrictToAdmin.js';
const router = express.Router();

//public routes
router.post('/register' , UserController.userRegistration);
router.post('/login', UserController.userLogin);
router.post('/send-password-reset-email', UserController.sendResetPasswordEmail);
router.post('/reset-password/:userId/:token', UserController.resetUserPasswordWithLink)
router.get('/get-users/:role', UserController.getUsers)
router.post('/update-user', UserController.updateUser)
//protected routes
router.post('/changepassword', checkUserAuth ,UserController.resetUserPassword)

//adminRoutes 

// router.post('/get-knowledgebases', checkUserAuth , restrictToAdmin,UserController.approveCourse)
router.post('/audit-course/:courseId',UserController.approveCourse)


export default router;