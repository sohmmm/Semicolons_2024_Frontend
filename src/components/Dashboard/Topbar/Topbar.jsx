import React from 'react'

import style from './Topbar.module.css';

function Topbar({ title }) {
    return (
        <div>
            <div>{title}</div>
            <div></div>
        </div>
    )
}

export default Topbar;