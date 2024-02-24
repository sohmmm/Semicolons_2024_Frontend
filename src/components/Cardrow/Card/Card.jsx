import React from "react";


const Card = ({title,count,img}) => {
  return (
    <div className="w-[33%] bg-slate-50 rounded-xl m-5 py-4">
      <div className="buttons flex py-2">
        <div className="bg-[#E89058] rounded-r-[10px]  w-[5%] h-9"></div>
        <div className="bg-[#E89058B2] rounded  ml-5 w-[12%] m-auto">
          <a href="#"><img src={img} className="w-[100%] p-1" alt="" /></a>
        </div>
      </div>
      <div className="info ml-9 py-2">
         <p className="text-[#E89058] font-medium text-[17px]">{title}</p>
         <h4 className="text-black text-[27px]">{count}</h4>
      </div>
    </div>
  );
};

export default Card;
