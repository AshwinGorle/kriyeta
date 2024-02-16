import express from 'express';
import CourseController from '../controllers/courseController.js';
const router = express.Router();

router.post('/create-course',CourseController.createCourse);
router.put('/update-course',CourseController.updateCourse);

export default router
