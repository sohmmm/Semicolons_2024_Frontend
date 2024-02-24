import React from "react";

import Topbar from "./Topbar/Topbar";
import BestSellingCard from "./Card/BestSellingCard";

function Dashboard() {
    return (
        <div>
            <Topbar title="Dashboard" />
            <div>
                <BestSellingCard title={"Best Selling Products"}/>
            </div>
        </div>
    );
}

export default Dashboard;
