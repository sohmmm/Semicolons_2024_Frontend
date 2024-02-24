import React from "react";


function Button({ name,handleClick }) {
    return (
        <button className="bg-[#E89058] rounded-[10px] py-1 px-8 text-white font-medium">{name}</button>
    );
}

export default Button;