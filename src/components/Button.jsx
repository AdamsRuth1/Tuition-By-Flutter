import React from "react";

const Button = ({ disable, handleSubmit, text }) => {
  return (
    <>
      <div className="pt-4">
        <button
          disabled={disable}
          onClick={handleSubmit}
          className=""
          style={{
            width: "480px",
            height: "62px",
            backgroundColor: "#252E6A",
            color: "#FFFFFF",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "22px",
            
          }}
        >
          {text}
        </button>
      </div>

     
    </>
  );
};

export default Button;
