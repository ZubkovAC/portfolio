import React from "react";
import img from "./../img/js.jpg"
import css from './Works.module.css'
import {Title} from "../components/title/Title";

export type WorkPropsType={
    title:string
    message:string
}

export const Work=(props:WorkPropsType)=>{
    return(
        <div >
            <a href='https://res.cloudinary.com/time2hack/image/upload/q_auto:good/5-best-javascript-editors-social-md.jpg'>
                <img src={img} alt="photo+work"/></a>
            <Title title={props.title}/>
            <div className={css.work}>

                <p>{props.message}</p>
            </div>
        </div>

    )
}