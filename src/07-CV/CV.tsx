import React, {useEffect, useState} from "react";
import css from './CV.module.scss'
import {Modal} from "../components/Modal/ModalCV";
//@ts-ignore
import { Document, Page } from 'react-pdf';

//@ts-ignore
import cvPdf from '../img/cvPhoto.pdf'
import cvPhoto from '../img/cv-2.jpg'


export const CV = () => {
    const [active, setActive] = useState<boolean>(true)


    useEffect(()=>{
        setTimeout(SetActive,0)
    },[])


    const Switch = () => {
        setActive(true)
    }
    const SetActive = () => {
        setActive(false)
    }

    return (
        <div className={css.CV}>
            <h3 className={css.CV_text} onClick={Switch}>CV</h3>
            <Modal active={active} setActive={SetActive}>
                {/*<img src={cvPhoto} className={css.img} alt="cv"/>*/}
                    <embed src={cvPdf} className={css.img} />
            </Modal>
        </div>
    )
}



