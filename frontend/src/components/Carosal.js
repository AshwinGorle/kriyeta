import React, { useEffect } from "react";
import CourseCard from "./CourseCard";
const Carosal = ({ myCourse, courses }) => {
  useEffect(()=>{
  const productContainers = [...document.querySelectorAll(".conent")];
  const nxtBtn = [...document.querySelectorAll(".next")];
  const preBtn = [...document.querySelectorAll(".prev")];
  console.log(productContainers);
  productContainers.forEach((item, i) => {
    console.log("item -----", item);
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    console.log(containerWidth);

    nxtBtn[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth;
    });
  });

  },[courses])
  
  return (
    <section>
      <div class="container w-full ">
        <button class="prev carbtn">Left</button>
        <button class="next carbtn">right</button>

        <div class="conent w-full scroll-smooth flex transition-2s">
          {courses?.map((course) => {
            return (
               
              <div class=" bg-white relative m-5">
                <CourseCard
                  myCourse={myCourse}
                  course={course}
                />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Carosal;
