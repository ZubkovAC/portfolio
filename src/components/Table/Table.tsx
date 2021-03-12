import React from "react";
import {TitleTable} from "../title/TitleTable";
import css from './Table.module.scss'
import img from "../../img/js.jpg";

export type TablePropsType={
    title:string
    message:string
}

export const Table = (props:TablePropsType) => {
    return(
        <div className={css.table_table}>
            <img src={img} width='150px' alt="icon"/>
            <TitleTable title={props.title}/>
            <div className={css.table_table_message} >
                {props.message}
            </div>
        </div>

    )
}