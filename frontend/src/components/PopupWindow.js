import React, { useState } from "react";

const PopupWindow = ({ children, show = false}) => {
  const [showPopUp, setShowPopup] = useState(show); 
  return (
    <>
      {showPopUp && (
        <div className="fixed inset-0 flex justify-center items-center backdrop-blur-lg">
          <div className="relative">
            <div className="absolute top-3 right-3 text-gray-600 cursor-pointer" onClick={() => setShowPopup(false)}>close</div>
            <div className="border rounded-lg border-black ">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};


export default PopupWindow;
