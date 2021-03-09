import React from "react";
import {Work} from "./Work";
import css from './Works.module.css'
import {Title} from "../components/title/Title";

const MyWorks = [
    {id:1,title:'Todolists',message:'A Todolist is a simple to-do list or task list. Write down all your important things in it, so as not to forget. "To-do list" will allow you to organize your working time effectively.'},
    {id:2,title:'Social NetWork',message:'The social network (abbr. A social network is an online platform that is used for communication, dating, creating social relationships between people who have similar interests or offline connections, as well as for entertainment (music, movies) and work.'},
]


export const Works=()=>{
    return(
        <div className={css.works}>
            <div className={css.works_Title}>
                <Title title={'My Works'}/>
            </div>


            <div className={css.box_works}>
                {
                    MyWorks.map( m=> <Work key={m.id} title={m.title} message={m.message}/>)
                }

            </div>

        </div>
    )
}
