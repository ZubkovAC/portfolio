import React from "react";
import {Work} from "./Work";
import css from './Works.module.css'

const MyWorks = [
    {id:1,title:'Todolists',message:'asdfsdaf22234jlk'},
    {id:2,title:'Social NetWork',message:'asdfagfa j asdfasdf2lk'},
]


export const Works=()=>{
    return(
        <div className={css.works}>
            <h3 style={{margin:'0px',padding:'20px',backgroundColor:'white'}}>My Works</h3>
            <div className={css.box_works}>
                {
                    MyWorks.map( m=> <Work key={m.id} title={m.title} message={m.message}/>)
                }

            </div>

        </div>
    )
}
