import React from "react";

const Card = () => {
  return (
    <div className="w-[33%]">
      <div className="buttons w-[10%] flex">
        <div className="bg-slate-400 rounded-r p-5"></div>
        <div className="bg-slate-400 rounded p-5 ml-10">
          <a href="">B</a>
        </div>
      </div>
      <div className="info">
         <p></p>
         <h4></h4>
      </div>
    </div>
  );
};

export default Card;
