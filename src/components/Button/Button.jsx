import React from "react";


function Button({ name, handleClick }) {
    return (
        <button onClick={handleClick} className="bg-[#E89058] rounded-[10px] h[80px] px-8">
            {name}
        </button>
    );
}

export default Button;