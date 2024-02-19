import mongoose, { Mongoose } from "mongoose";

const courseSchema = mongoose.Schema({
  
  name: { type: String, require: true },
  about: { type: String, require: true },
  rating: { type: String, require: true },
  reviews: [{ type: String, require: true }],
  duration: { type: String, require: true },
  status: { type: String , require : true , default: 'pending'},
  domain : {type : String},
  thumbnailUrl : { type : String , default : "https://jogajog24.com/storage/app/uploads/public/624/dac/292/thumb_9505_750_420_0_0_crop.jpg" }, 
  content: {  chapters:[] },
  authors: [
    {
      required: true,
      type: mongoose.Types.ObjectId,
    },
  ],
  knowledgeBase: [
    {
      name: { type: String, require: true },
      link: { type: String, require: true },
    },
  ],
});

const CourseModel = mongoose.model("course", courseSchema);

export default CourseModel;
