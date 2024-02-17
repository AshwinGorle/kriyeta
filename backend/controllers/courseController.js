import CourseModel from "../models/Course.js";

class CourseController {
  static createCourse = async (req, res) => {
    const body = req.body;

    const { name, about, duration, thumbnailUrl, domain, authors } = body;
    if (!name || !about || !duration || !authors) {
      res.send({ status: "failed", message: "All fields are required" });
    }
    try {
      const course = await CourseModel.create({
        name,
        about,
        duration,
        thumbnailUrl,
        domain,
        authors,
      });

      res.send({ status: "success", data: course });
    } catch (error) {
      res.send({ status: "failed", message: "Failed to create course" });
    }
  };

  static updateCourse = async (req, res) => {
    const {courseId} = req.params;
    console.log("courseId in controller ", courseId);
    const data = req.body.data;
    
    console.log("-------------",data);
    
    if (!courseId ) {
      res.send({ status: "failed", message: "Course update fail" });
    }
    try {
      const course = await CourseModel.findByIdAndUpdate(courseId, {content : data});

      res.send({ status: "success", data: course });
    } catch (error) {
      console.log("update eroor ", error);
    }
  };

  static getAllCourses = async (req, res) => {
    try {
      const courses = await CourseModel.find();
      res.send({ status: "success", data: courses });
    } catch (err) {
      res.send({
        status: "failed",
        message: "Network error! Please try Again",
      });
    }
  };

  static getCourseById = async (req, res) => {
    const { courseId } = req.params;
    console.log("request for course with ", courseId);
    try {
      const response = await CourseModel.findById(courseId);
      res.send({
        status: "success",
        message: "Start Editing Course!",
        data: response,
      });
    } catch (err) {
      res.send({ status: "failed", message: "Course Not Found !" });
    }
  };
}

export default CourseController;
