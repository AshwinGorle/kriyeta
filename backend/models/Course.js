import mongoose, { Mongoose } from "mongoose";

const courseSchema = mongoose.Schema({
  name: { type: String, require: true },
  about: { type: String, require: true },
  rating: { type: String, require: true },
  reviews: [{ type: String, require: true }],
  duration: { type: String, require: true },
  content : {type : Object},
  authors: [
    {
      required: true,
      type: mongoose.Types.ObjectId,
    },
  ],
  knowledgeBase: [{
    name: { type: String, require: true},
    description: { type: String},
    link: { type: String, require: true},
  }]
});

const CourseModel = mongoose.model("course", courseSchema);

export default CourseModel;
