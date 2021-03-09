import React from "react";
import css from './Contact.module.css'
import {Communication} from "./Сommunication";
import {Thoughts} from "./Thoughts";
import {Title} from "../components/title/Title";

export const Contact = () => {
    return (
        <div >
            <div className={css.contact} >
                <Title title={'Contact'}/>
                <div className={css.contact_container}>

                    <Communication/>
                    <Thoughts/>
                </div>
            </div>
        </div>
    )
}
