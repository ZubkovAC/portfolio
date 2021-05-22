import React from "react";
import css from './Works.module.scss'
import {Title} from "../components/title/Title";
import {WorkTable} from "../components/Table/WorkTable";

import counter from '../img/MyWorks/counter.jpg'
import github from '../img/label/githubLogo.png'
import packCard from '../img/MyWorks/packCard.jpg'

import todolist from '../img/MyWorks/todolist.jpg'

import social from '../img/MyWorks/social.jpg'

const MyWorks = [
    {id:1,title:'Flashcards',message:'This site is designed to create your own question - and-answer cards, to maintain ' +
            'or study footwork material.',img:packCard,https:'https://zubkovac.github.io/Tasks/#/',
        github:github ,aGit:'https://github.com/ZubkovAC/Tasks'},

    {id:2,title:'Todolists',message:'this is a simple to-do list or task list. Write down all your important things in ' +
            'it, so as not to forget. "To-do list" will allow you to organize your working time effectively.'
        ,img:todolist,https:'https://zubkovac.github.io/TodoList/#/',
        github:github,aGit:'https://github.com/ZubkovAC/TodoList'},

    {id:3,title:'Social NetWork',message:'The social network (abbr. A social network is an online platform that is used' +
            ' for communication, dating, creating social relationships between people who have similar interests or ' +
            'offline connections, as well as for entertainment (music, movies) and work.',img:social
        ,https:'https://zubkovac.github.io/Samurai/#/',
        github:github,aGit:'https://github.com/ZubkovAC/Samurai'},

    {id:4,title:'Counter',message:'a device for counting something.',img:counter,https:'https://zubkovac.github.io/counter/',
        github:github,aGit:'https://github.com/ZubkovAC/counter'},
]


export const Works=()=>{
    return(
        <div className={css.works} id='MyWorks'>
            <div className={css.works_Title}>
                <Title title={'My Works'}/>
            </div>
            <div className={css.box_works}>
                {
                    MyWorks.map( m=> <WorkTable
                        github={m.github}
                        aGit={m.aGit}
                        https={m.https}
                        img={m.img}
                        key={m.id}
                        title={m.title}
                        message={m.message}/>)
                }
            </div>
        </div>
    )
}
