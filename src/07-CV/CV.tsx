import React, {useState} from "react";
import css from './CV.module.scss'
import {Modal} from "../components/Modal/ModalCV";

export const CV = () =>{
    const [active,setActive]=useState<boolean>(false)


    const Switch =() => {
        setActive(true)
    }
    const SetActive = () =>{
        setActive(false)
    }

    return(
        <div className={css.CV}>
            <h3 className={css.CV_text} onClick={Switch}>CV</h3>
            <Modal active={active} setActive={SetActive} >
                <h3 className={css.CV_text} >Way Way Way</h3>
            </Modal >
        </div>
    )
}