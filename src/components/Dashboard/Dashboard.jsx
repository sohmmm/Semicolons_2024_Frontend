import React from "react";
import Doughnut from '../Doughnut/Doughnut'
import Bargraph from '../Bargraph/Bargraph'
import Topbar from "./Topbar/Topbar";
import BestSellingCard from "./Card/BestSellingCard";
import MostFrequentCustomer from "./Card/MostFrequentCustomer";
import Cardrow from "../Cardrow/Cardrow";
import Linegraph from "../Linegraph/Linegraph";

function Dashboard() {
    return (
        <div>
            <Topbar title="Dashboard" />
            <div className="flex h-[100%]">
                <div className="flex justify-center items-center w-[50%] bg-white rounded-[10px]">
                    <Doughnut />
                    <Bargraph />
                </div>
                <div className="w-[50%]">
                    <BestSellingCard title={"Best Selling Products"} />
                </div>
            </div>
            <Cardrow/>
            <div className="w-[50%] h-[100%]">
                <MostFrequentCustomer title={"Most Frequent Customers"} />
            </div>
            <div className="w-[60%] h-[50vh]">
            <Linegraph/>
            </div>
        </div>
    );
}

export default Dashboard;
