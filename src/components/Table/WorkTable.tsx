import React from "react";
import img from '../../img/js.jpg'
import css from './WorkTable.module.scss'
import {TitleTable} from "../title/TitleTable";


export type WorkPropsType={
    title:string
    message:string
}

export const WorkTable=(props:WorkPropsType)=>{
    return(
        <div className={css.work_container} >
            <a href='https://res.cloudinary.com/time2hack/image/upload/q_auto:good/5-best-javascript-editors-social-md.jpg'>
                <img src={img} alt="photo+work"/></a>
            <TitleTable title={props.title}/>
            <div className={css.work}>

                <p>{props.message}</p>
            </div>
        </div>

    )
}