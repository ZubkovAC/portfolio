import React from "react";
import css from './Skills.module.scss'
import {Table} from "../components/Table/Table";
import {Title} from "../components/title/Title";



const MySkills = [
    {id:12,title:'React',message:['Hooks','Redux','React-Redux','UniTest','HOC','storyBook(low)']},
    {id:22,title:'TypeScript',message:['type of data','callback','type function','type AXIOS','type of generic (low)']},
    {id:32,title:'server requests ',message:['Promises','Thunk','axios']},
    {id:42,title:'Blind printing',message:['Blind typing is a type of typing on the keyboard.' +
        ' After learning this skill, typing speeds up by 2 -2.5 times , and the number of errors is reduced.']},
    {id:52,title:'Css',message:['flex','SASS','grid(low)']},
]


export const Skills=()=>{
    return(
        <div className={css.box_skills}>
            <div className={css.box_skills_container} >
                <Title title={'My Skills'}/>

                <div className={css.box_skills_table}>
                    {
                        MySkills.map( s => {
                         return <Table  key={s.id} title={s.title} message={s.message}/>
                            })
                    }
                </div>
            </div>



        </div>
    )
}
