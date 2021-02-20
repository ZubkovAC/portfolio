import React from "react";
import css from './Header.module.css'
import {Menu} from "./Menu";

const UpMenu =[
    {id:1,title:'Main Page'},
    {id:2,title:'Skills'},
    {id:3,title:"Works"},
    {id:4,title:"Contact"},
]

export const Header=()=>{
    return(
        <div className={css.header}>
            <div className={css.header_box}>
                {
                    UpMenu.map( m => <Menu key={m.id} menu={m.title}/>)
                }
            </div>
        </div>
    )
}

