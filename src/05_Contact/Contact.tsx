import React from "react";
import css from './Contact.module.scss'
import {Communication} from "./Сommunication";
import {Thoughts} from "./Thoughts";
import {Title} from "../components/title/Title";



export const Contact = () => {
    return (
        <div >
            <div className={css.contact} id='Contact'>

                <Title title={'quick contact'}/>
                <div className={css.contact_container}>

                    <Communication/>
                    <Thoughts/>
                </div>
            </div>
        </div>
    )
}
