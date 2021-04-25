import css from "./Header.module.scss";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";

export type MenuPropsType ={
    menu:string
}

export const MenuOff=(props:MenuPropsType)=>{
    const [accordion, setAccordion] = useState(false)
    const menu = (e:any) => {
        setAccordion(!accordion)
        // e.stopPropagation()
    }
    return(
        <div className={accordion ? css.menu : css.menu_active  }>

            <a href="#" className={css.menu_btm} onClick={menu}>
                <nav>

                    <NavLink to="1"  className={css.header} activeClassName={css.active}>
                        {props.menu}</NavLink>

                </nav>

            </a>
        </div>
    )
}





