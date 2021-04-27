import React from "react";

type InputPropsType ={
    title:string
    type: 'text' | 'number' | "email" | "submit"
    name: "phone" | "name" | "email" | 'pass' | 'message'
    value?:'Send'
    onText?:(e:any)=>void
}

export const Input = (props:InputPropsType) => {


    const onChange = (e:any) =>{
        props.onText && props.onText(e.currentTarget.value)
    }

        const wrapper = document.querySelector(".input_wrapper"), textInput = document.querySelector("input[type='text']");

        // @ts-ignore
    textInput &&  textInput.addEventListener("keyup", event => {wrapper && wrapper.setAttribute("data_text",  event.target.value)});

    return (
        <div className='input_wrapper' data-text="">
            {props.value
                ?
                <input type={props.type} title={props.title} name={props.name} autoComplete="off" value={props.value}/>
                :
                <input
                    type={props.type}
                    placeholder={props.title}
                    autoComplete="off"
                    name={props.name}
                    onChange={onChange}
                />
            }
        </div>
    )
}