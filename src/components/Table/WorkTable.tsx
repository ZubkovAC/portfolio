import React from "react";
import css from './WorkTable.module.scss'
import {TitleTable} from "../title/TitleTable";


export type WorkPropsType={
    title:string
    message:string
    img:string
    https:string
    github:string
    aGit:string
}


export const WorkTable=(props:WorkPropsType)=>{

    return(
        <div className={css.work_container} >
            <a href={props.https} target="_blank"  >
                <img src={props.img} width='300px' alt="photo+work"/></a>
            <TitleTable title={props.title}/>
            <div className={css.work_message}>
                <p>{props.message}</p>
                <a href={props.aGit} style={{width:'30px',marginLeft:'95%'}} target="_blank">
                    <img src={props.github}
                         style={{
                             width:'30px',
                             boxShadow:'0 0 0 0 white',
                             margin:'0px',
                         }}
                         alt="iconGit"/>
                </a>
            </div>

        </div>
    )
}
