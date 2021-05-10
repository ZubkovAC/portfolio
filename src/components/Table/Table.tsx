import React from "react";
import {TitleTable} from "../title/TitleTable";
import css from './Table.module.scss'


export type TablePropsType={
    title:string
    message:Array<string>

}

export const Table = (props:TablePropsType) => {
    return(
        <div className={css.table_table}>
            <TitleTable title={props.title}/>
            <div className={css.table_table_message} >
                <ul>
                {props.message.map(mes=><div key={mes} className={css.mes}> {mes}</div>)}
                </ul>
            </div>
        </div>
    )
}