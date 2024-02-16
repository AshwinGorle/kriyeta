import CourseModel from "../models/Course.js";

class CourseController {
  static createCourse = async (req, res) => {
    const body = req.body;
    const authors = "id";
    const { name, about, duration } = body;
    if (!name || !about || !duration || !authors) {
      res.send({ status: "failed", message: "All fields are required" });
    }
    try {
      const course = await CourseModel.create({ name, about, duration });
      res.send({ status: "success", data: course });
    } catch (error) {
      res.send({ status: "failed", message: "Failed to create course" });
    }
  };

  static updateCourse = async (req, res) => {
    const body = req.body;
    const { courseId, content } = body;
    if (!courseId || !content) {
      res.send({ status: "failed", message: "Course update fail" });
    }
    try {
      const course = await CourseModel.updateOne(
        { _id: courseId },
        { content }
      );
      res.send({ status: "success", data: course });
    } catch (error) {
      res.send({ status: "failed", message: "Failed to update course" });
    }
  };
}

export default CourseController;
