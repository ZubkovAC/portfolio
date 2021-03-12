import React from "react";
import css from './TitleTable.module.scss'

type TitlePropsType ={
    title:string
}

 export const TitleTable = (props:TitlePropsType) => {
    return (
        <div className={css.title_container_table}>
            <div className={css.title_table}>
                {props.title}
            </div>

        </div>
    )}