import React, {useState} from "react";
import css from './Header.module.scss'
import { Link } from "react-scroll";
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

                                <Link
                                    onClick={menuOff}
                                    to="MainPage"
                                    className={css.header}
                                    activeClass={css.active}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >{UpMenu[0].title}</Link>
                                <Link
                                    onClick={menuOff}
                                    to="MySkiils"
                                    className={css.header}
                                    activeClass={css.active}
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >{UpMenu[1].title}</Link>
                                <Link
                                    onClick={menuOff}
                                    to="MyWorks"
                                    className={css.header}
                                    activeClass={css.active}
                                    spy={true}
                                    smooth={true}
                                    offset={1}
                                    duration={500}
                                >{UpMenu[2].title}</Link>
                                <Link
                                    onClick={menuOff}
                                    to="Contact"
                                    className={css.header}
                                    activeClass={css.active}
                                    spy={true}
                                    smooth={true}
                                    offset={1750}
                                    duration={500}
                                >{UpMenu[3].title}</Link>

                                <NavLink to="/" className={css.header} >
                                    {UpMenu[4].title}</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

