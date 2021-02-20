import React from "react";
import img from "./../img/js.jpg"
import css from './Works.module.css'

export type WorkPropsType={
    title:string
    message:string
}

export const Work=(props:WorkPropsType)=>{
    return(
        <div className={css.work}>
            <a href='https://res.cloudinary.com/time2hack/image/upload/q_auto:good/5-best-javascript-editors-social-md.jpg'><img src={img} alt="photo+work"/></a>
                <h4 style={{backgroundColor:'maroon'}}>{props.title}</h4>
                <p>{props.message}</p>
        </div>
    )
}