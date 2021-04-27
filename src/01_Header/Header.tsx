import React, {useState} from "react";
import css from './Header.module.scss'
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
                <div className={accordion ? css.menu : css.menu_active}  onClick={menuOff}>
                    <div className={css.stopProppagation} >
                    <NavLink to="#" className={css.menu_btm} onClick={menu}> </NavLink>
                        <nav className={css.menu_list} >

                                <a href="#" className={css.header} >
                                    {UpMenu[0].title}</a>
                                <a href="#MySkiils" className={css.header} >
                                    {UpMenu[1].title}</a>
                                <a href="#MyWorks" className={css.header} >
                                    {UpMenu[2].title}</a>
                                <a href="#Contact"   className={css.header} >
                                    {UpMenu[3].title}</a>
                                <NavLink to="/" className={css.header} activeClassName={css.active}>
                                    {UpMenu[4].title}</NavLink>


                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

