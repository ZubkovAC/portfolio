import React from "react";
import css from './Works.module.scss'
import {Title} from "../components/title/Title";
import {WorkTable} from "../components/Table/WorkTable";

const MyWorks = [
    {id:1,title:'Todolists',message:'this is a simple to-do list or task list. Write down all your important things in it, so as not to forget. "To-do list" will allow you to organize your working time effectively.'},
    {id:2,title:'Social NetWork',message:'The social network (abbr. A social network is an online platform that is used for communication, dating, creating social relationships between people who have similar interests or offline connections, as well as for entertainment (music, movies) and work.'},
    {id:3,title:'Flashcards',message:'This site is designed to create your own question - and-answer cards, to maintain or study footwork material.'},
    {id:4,title:'Counter',message:'a device for counting something.'},
]


export const Works=()=>{
    return(
        <div className={css.works}>
            <div className={css.works_Title}>
                <Title title={'My Works'}/>
            </div>


            <div className={css.box_works}>
                {
                    MyWorks.map( m=> <WorkTable key={m.id} title={m.title} message={m.message}/>)
                }

            </div>

        </div>
    )
}
