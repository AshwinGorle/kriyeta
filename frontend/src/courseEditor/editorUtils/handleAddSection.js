import { BASE_URL } from "../../configs/config";
import { addSectionToStore } from "../../utils/editorSlice";
const handleAddSection = async (courseId, dispatch)=>{
    try{
        const response = await fetch(`${BASE_URL}course/edit/section/add?courseId=${courseId}`,{
          
            method: "Post",
            headers: {
              "Content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body : JSON.stringify({
              name : "Section-xx",
              duration : 10,
              numberOfTopics : "5",
              description : "section descripiton",
              topics : []
            })
          }
        );
        const data = await response.json();
        //inserting section into store's course
        if(data.status == "success") dispatch(addSectionToStore(data.data));
      
        
    }catch(err){
      console.log("Error while adding section",err)
    }
  }

  export default  handleAddSection;