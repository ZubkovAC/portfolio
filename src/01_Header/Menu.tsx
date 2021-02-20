import css from "./Header.module.css";
import React from "react";

export type MenuPropsType ={
    menu:string
}

export const Menu=(props:MenuPropsType)=>{
    return(
        <div className={css.menu}>
            <a href="1">{props.menu}</a>
        </div>
    )
}