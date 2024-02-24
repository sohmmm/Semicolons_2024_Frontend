import React, { useState } from "react";
import { Link } from "react-router-dom";

import style from "./Profile.module.css";

function Profile() {
    const [profile, setProfile] = useState(false);

    function handleProfile() {
        setProfile(pre => !pre)
    }

    return (
        <div className={style.profile_box}>
            <div onClick={handleProfile}>profile</div>
            {profile &&
            <div className={style.dropdown}>
                <Link>Profile</Link>
                <Link>Settings</Link>
                <Link>Contact Us</Link>
                <Link>Logout</Link>
            </div>
            }
        </div>
    );
}

export default Profile;