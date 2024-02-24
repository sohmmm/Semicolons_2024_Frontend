import React from "react";

import style from "./Navbar.module.css";

import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const links = [
        { name: "Dashboard", link: "/dashboard" },
        { name: "Inventory", link: "/inventory" },
        { name: "Sales", link: "/sales" },
        { name: "Purchase", link: "/purchase" },
        { name: "Customers", link: "/customers" },
    ];

    const navigate = useNavigate();

    return (
        <div className={style.navbar}>
            <div className={style.navbar_container}>
                {/* left */}
                <div className={style.logo} onClick={() => navigate("/home")}>LOGO</div>

                {/* mid */}
                <div className={style.navbar_container_mid}>
                    {links.map((item, index) => (
                        <div key={index}>
                            <Link to={item.link}>{item.name}</Link>
                        </div>
                    ))}
                </div>

                {/* right */}
                <div>
                    <div>
                        <Link to="/profile">Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;