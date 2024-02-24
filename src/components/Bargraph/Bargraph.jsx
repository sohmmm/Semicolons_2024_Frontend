import React from "react";

const Bargraph = ({  }) => {
    const values={
        objOne:100,
        objTwo:200,
        objThree:250,
        objFour:50,
    }
  return (
    <div className="p-2 flex flex-col w-[50%] bg-white rounded-[10px]">
      <div className="my-2 flex flex-col">
        <p className="title font-normal mb-1   text-[12px]">HIGH STOCK PRODUCT</p>
        <div className={`line w-[${values.objOne}px] h-2 bg-[#80B357] rounded-sm `}></div>
        <p className="num  font-normal  text-[12px]">{values.objOne}</p>
      </div>
      <div className="my-2 flex flex-col">
        <p className="title font-normal mb-1   text-[12px]">NEAR LOW STOCK PRODUCT</p>
        <div className={`line w-[${values.objTwo}px] h-2 bg-[#C68F3D] rounded-sm`}></div>
        <p className="num  font-normal  text-[12px]">{values.objTwo}</p>
      </div>
      <div className="my-2 flex flex-col">
        <p className="title font-normal mb-1   text-[12px]">LOW STOCK PRODUCT</p>
        <div className={`line w-[${values.objThree}px] h-2 bg-[#C65E3D] rounded-sm`}></div>
        <p className="num  font-normal  text-[12px]">{values.objThree}</p>
      </div>
      <div className="my-2 flex flex-col">
        <p className="title font-normal mb-1   text-[12px]">OUT OF STOCK PRODUCT</p>
        <div className={`line w-[${values.objFour}px] h-2 bg-[#D93F3F] rounded-sm`}></div>
        <p className="num  font-normal  text-[12px]">{values.objFour}</p>
      </div>
    </div>
  );
};

export default Bargraph;
