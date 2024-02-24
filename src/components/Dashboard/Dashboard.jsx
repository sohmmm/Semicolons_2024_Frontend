import React from "react";
import Doughnut from '../Doughnut/Doughnut'
import Bargraph from '../Bargraph/Bargraph'
import Topbar from "./Topbar/Topbar";
import BestSellingCard from "./Card/BestSellingCard";
import MostFrequentCustomer from "./Card/MostFrequentCustomer";

function Dashboard() {
    return (
        <div>
            <Topbar title="Dashboard" />
            <div className="flex">
                <div className="flex justify-center items-center w-[50%]">
                    <Doughnut />
                    <Bargraph />
                </div>
                <div className="w-[50%]">
                    <BestSellingCard title={"Best Selling Products"} />
                </div>
            </div>
            <div className="w-[50%]">
                <MostFrequentCustomer title={"Most Frequent Customers"} />
            </div>
        </div>
    );
}

export default Dashboard;
