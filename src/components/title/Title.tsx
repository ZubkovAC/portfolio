import React from "react";
import css from './Title.module.scss'

type TitlePropsType ={
    title:string
}

 export const Title = (props:TitlePropsType) => {
    return (
        <div className={css.title_container}>
            <div className={css.title}>
                {props.title}
            </div>

        </div>
    )}