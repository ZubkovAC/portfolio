import css from "./Skills.module.css";
import React from "react";
import img from "./../img/js.jpg"
import {Title} from "../components/title/Title";

export type TablePropsType={
    title:string
    message:string
}

export const Table = (props:TablePropsType) => {
    return(
        <div className={css.table_table}>
            <img src={img} width='150px' alt="icon"/>
            <div className={css.table_table_Title}>
                <Title title={props.title} />
            </div>

            <div className={css.table_table_message} >
                {props.message}
            </div>
        </div>

    )
}