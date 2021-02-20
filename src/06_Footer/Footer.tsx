import React from "react";
import css from './Footer.module.css'
import vk from './../img/vk7.png'
import github from './../img/github.png'
import google from './../img/google.png'
import youtube from './../img/youtube.png'

import pngegg from './../img/pngegg.png'


const FooterSite = [
    {id:1,title:'vk',href:"https://vk.com/id18217504",img:vk},
    {id:1,title:'github',href:"https://github.com/ZubkovAC",img:github},
    {id:1,title:'google',href:"https://www.google.ru/",img:google},
    {id:1,title:'youtube',href:"https://www.youtube.com/channel/UC9DJ3Zqld-nqcdy_ozJp1QQ/about",img:youtube},
]

export const Footer = () => {
    return (
        <div className={css.footer}>
            <div className={css.footer_container}>
                <h3 style={{margin:'0px',padding:'20px'}}>ZybkovAC</h3>
                <div>
                    {
                        FooterSite.map(f => <a key={f.id} href={f.href}><img src={f.img} alt={f.title}/></a>)
                    }
                </div>
                <div className={css.copyright}>
                    <img  src={pngegg} alt="copyrigth"/><span style={{paddingLeft:'30px',fontWeight:600}} >dezign  ZybkovAC</span>
                </div>
            </div>
        </div>
    )
}