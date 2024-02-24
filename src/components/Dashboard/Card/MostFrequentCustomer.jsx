import React, { useEffect, useState } from "react";

import style from "./Card.module.css";
import { Link } from "react-router-dom";

function MostFrequentCustomer({ title }) {
    const [mostFrequentCustomer, setMostFrequentCustomer] = useState([]);

    useEffect(() => {
        setMostFrequentCustomer([
            { name: "Aman Kumar", mobile: "9826xxxxx", sales: "$2000" },
            { name: "Pushkar", mobile: "9826xxxxx", sales: "$1500" },
            { name: "Abdul Hamid", mobile: "9826xxxxx", sales: "$1300" },
        ]);
    }, []);

    return (
        <div className={`${style.container} rounded-[10px] bg-gradient-to-br from-orange-200 h-[100%]`} >
            <div className="flex justify-between grow">
                <p>{title}</p>
                <Link to={"/most-frequent-customer"} className="text-sm text-orange-400">
                    View more -
                </Link>
            </div>
            <div className="flex flex-col gap-2 text-sm">
                {mostFrequentCustomer.map((customer, index) => (
                    <div key={index} className="flex justify-between items-center bg-white rounded-lg px-3 py-1">
                        <div className="text-left flex flex-col w-[50%]">
                            <p>{customer.name}</p>
                            <p>Mobile: {customer.mobile}</p>
                        </div>
                        <div className="w-[30%]">
                            <p>Total Sales: {customer.sales}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MostFrequentCustomer;
