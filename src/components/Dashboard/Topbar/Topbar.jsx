import React, { useState } from 'react'

import style from './Topbar.module.css';

import Button from '../../Button/Button';

function Topbar({ title }) {
    const [quickAction, setQuickAction] = useState(false);

    function handleQuickActionClick() {
        setQuickAction(pre => !pre);
    }

    return (
        <div className={style.topbar}>
            <div className={style.title}>{title}</div>
            <div className={style.dropdown}>
                <Button handleClick={handleQuickActionClick} name={"Quick Action"} />
                {quickAction &&
                    <div className={style.flex}>
                        <Button name={"Create Bill"} />
                        <Button name={"Contact Us"} />
                    </div>
                }
            </div>
        </div>
    );
}

export default Topbar;