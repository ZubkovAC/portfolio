import React from "react";
import css from './ModalCV.module.css'



export type ModalPropsType ={
    setActive:(e:boolean)=>void
    active:boolean
    children:any
    target:boolean
}

export const Modal = (props:ModalPropsType) => {

    let active = `${css.modal} ${css.active}`
    let modal_content = `${css.modalb_content} ${css.active}`
    // if (!props.target) return null;  const [active, setActive] = useState<boolean>(false) (CV.tsx)
    // if (!props.active) return null;      no transition:0.5s ;

    return (
        <div className={props.active && props.target? active : css.modal} onClick={()=>props.setActive(false)}>
            <div className={props.active? modal_content : css.modal_content} onClick={e=>e.stopPropagation()}>
                <div  className={css.button}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}