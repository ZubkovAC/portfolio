import React from "react";
import css from './Header.module.css'
import {Menu2} from "./Menu";

export const Header2=()=>{
    return(
        <div className={css.header2}>
            <div className={css.header_box2}>
                <Menu2/>
                <Menu2/>
                <Menu2/>
                <Menu2/>
            </div>

        </div>
    )
}

