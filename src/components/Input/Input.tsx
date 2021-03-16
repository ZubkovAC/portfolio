import React from "react";
import  './Input.module.scss'
type InputPropsType ={
    title:string
    type:'text' | 'number'
}

export const Input = (props:InputPropsType) => {
    const wrapper = document.querySelector(".input_wrapper"),
        textInput = document.querySelector("input[type='text']");

    textInput && textInput.addEventListener("keyup", event => {
        // @ts-ignore
        wrapper && wrapper.setAttribute("data_text",  event.target.value);
    });
    return (
        <div className='input_wrapper' data-text="asdfas">
            <input type={props.type} placeholder={props.title}/>

        </div>
    )
}