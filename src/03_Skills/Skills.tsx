import React from "react";
import css from './Skills.module.css'
import {Table} from "./Table";
import {Title} from "../components/title/Title";


const MySkills = [
    {id:12,title:'HTML',message:'HyperText Markup Language - is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page\'s appearance/presentation (CSS) or functionality/behavior (JavaScript).'},
    {id:22,title:'CSS',message:'Cascading Style Sheets - is the code that styles web content. CSS basics walks through what you need to get started.'},
    {id:32,title:'JS',message:'JavaScript - is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.'},
    {id:42,title:'UniTest',message:'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.'},
    {id:52,title:'TypeScript',message:'TypeScript extends JavaScript by adding types. By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before you run code.'},
    {id:62,title:'Blind printing',message:'Blind typing is a type of typing on the keyboard. After learning this skill, typing speeds up by 2 -2.5 times , and the number of errors is reduced.'},
]



export const Skills=()=>{
    return(
        <div className={css.box_skills}>
            <div className={css.box_skills_container} >
                <Title title={'My Skills'}/>
                <div className={css.box_skills_table}>
                    {
                        MySkills.map( s => <Table key={s.id} title={s.title} message={s.message}/> )
                    }
                </div>
            </div>



        </div>
    )
}
