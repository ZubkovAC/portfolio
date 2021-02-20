import css from "./Skills.module.css";
import React from "react";
import img from "./../img/js.jpg"

export type TablePropsType={
    title:string
    message:string
}

export const Table=(props:TablePropsType)=>{
    return(
        <div className={css.table_table}>
            <img src={img} width='150px' alt="icon"/>
            <h3 style={{backgroundColor:'maroon'}}>{props.title}</h3>
            <div  >
                {props.message}
            </div>
        </div>

    )
}