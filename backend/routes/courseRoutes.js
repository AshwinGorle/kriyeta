import express from 'express';
import CourseController from '../controllers/courseController.js';
const router = express.Router();

router.post('/create-course', CourseController.createCourse);
router.post('/update-course/:courseId', CourseController.updateCourse);
router.get('/get-all-courses',CourseController.getAllCourses);
router.get('/get-course/:courseId',CourseController.getCourseById);



export default router
