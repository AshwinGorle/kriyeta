import { BASE_URL } from "../../configs/config";
import { removeSection } from "../../utils/editorSlice";
const handleRemoveSection = async( sectionId, courseId, dispatch)=>{
    try{
      console.log("request--------",`${BASE_URL}course/edit/section/remove?courseId=${courseId}&sectionId=${sectionId}`)
        const response = await fetch(`${BASE_URL}course/edit/section/remove?courseId=${courseId}&sectionId=${sectionId}`,{
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        console.log("section id __",sectionId);
        console.log("deleting section with id_____",data)
        if(data.status == "success") dispatch(removeSection(sectionId));
        
    }catch(err){
      console.log("adding err",err)
    }
}

export default handleRemoveSection;