import React, {useEffect, useState} from "react";
import css from './CV.module.scss'
import {Modal} from "../components/Modal/ModalCV";

//@ts-ignore
import cvPdf from '../img/cvPhoto.pdf'
import {NavLink} from "react-router-dom";


export const CV = () => {
    const [active, setActive] = useState<boolean>(true)
    const [target, setTarget] = useState<boolean>(false)


    useEffect(()=>{
       setTimeout(SetOffActive,0)
        setTarget(true)
    },[])


    const Switch = () => {
        setActive(true)
    }
    const SetOffActive = () => {
        setActive(false)
    }

    return (
        <div className={css.CV}>
            <NavLink to="" style={{color:'white',textDecoration:'none'}} onClick={Switch} >
                <h3 className={css.CV_text} >CV</h3>
            </NavLink>
                <Modal active={active} setActive={SetOffActive} target={target} >
                    <embed src={cvPdf} className={css.img} />
                </Modal>
        </div>
    )
}