import React from 'react'

import style from './Topbar.module.css';

import Button from '../../Button/Button';

function Topbar({ title }) {
    return (
        <div className={style.topbar}>
            <div>{title}</div>
            <Button name={"Quick Action"} />
        </div>
    )
}

export default Topbar;