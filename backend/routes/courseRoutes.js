import express from 'express';
import CourseController from '../controllers/courseController.js';
const router = express.Router();

router.post('/create-course', CourseController.createCourse);
router.post('/update-course/:courseId', CourseController.updateCourse);
router.get('/get-all-courses',CourseController.getAllCourses);
router.get('/get-my-courses/:userId',CourseController.getMyCourses);
router.get('/get-course/:courseId',CourseController.getCourseById);
router.post('/create-knowledgebase/:courseId',CourseController.addKnowlegebase);
router.get('/get-knowledgebases/:courseId',CourseController.getKnowlegebase);



export default router
