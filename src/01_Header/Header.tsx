import React, {useState} from "react";
import css from './Header.module.scss'
import {MenuOff} from "./MenuOff";
import {NavLink} from "react-router-dom";

const UpMenu = [
    {id: 1, title: 'Main Page'},
    {id: 2, title: 'Skills'},
    {id: 3, title: "Works"},
    {id: 4, title: "Contact"},
    {id: 5, title: "CV(create)"},
]


export const Header = () => {
    const [accordion, setAccordion] = useState(true)
    const menu = (e:any) => {
        setAccordion(!accordion)
        e.stopPropagation()
    }
    const menuOff = () =>{
        setAccordion(true)
    }
    return (

        <div >
            <div className={css.wrapper} >
                <div className={accordion ? css.menu : css.menu_active}>
                    <div className={css.stopProppagation} onClick={menuOff}>
                    <NavLink to="#" className={css.menu_btm} onClick={menu}> </NavLink>
                        <nav className={css.menu_list} >

                                <NavLink to="#" className={css.header} activeClassName={css.active}>
                                    {UpMenu[0].title}</NavLink>
                                <NavLink to="/" className={css.header} activeClassName={css.active}>
                                    {UpMenu[1].title}</NavLink>
                                <NavLink to="/" className={css.header} activeClassName={css.active}>
                                    {UpMenu[2].title}</NavLink>
                                <NavLink to="/" className={css.header} activeClassName={css.active}>
                                    {UpMenu[3].title}</NavLink>
                                <NavLink to="/" className={css.header} activeClassName={css.active}>
                                    {UpMenu[4].title}</NavLink>

                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

