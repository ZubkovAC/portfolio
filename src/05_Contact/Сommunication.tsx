import css from './Contact.module.scss'
import emailjs from 'emailjs-com';
import {useState} from "react";
import './../components/Input/Input.module.scss'
import toast, { Toaster } from 'react-hot-toast';
import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

interface IFormInput {
    firstName: string
    email:string
    phone:number
    message:string
}

type ContactInputType = {
    id: number
    title: string
    type: 'text' | 'number' | "email" | "submit"
    name: "phone" | "name" | "email" | 'pass' | 'message'
    value?: 'Send'
}

const ContactInput: ContactInputType[] = [
    {id: 100, title: 'Name', type: 'text', name: "name"},
    {id: 101, title: 'Email', type: 'email', name: "email"},
    {id: 102, title: 'Phone', type: 'number', name: "phone"},
    {id: 103, title: 'Message', type: 'text', name: "message"},
    {id: 104, title: 'xyi', type: 'submit', name: "pass", value: 'Send'},
]

export const Communication = () => {

    const [edit, setEdit] = useState<boolean>(false)

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phone, setPhone] = useState<any>('')
    const [message, setMessage] = useState<string>('')

    const testName = (value: string) => {
        setName(value)
        testButton()
    }
    const testEmail = (value: string) => {
        setEmail(value)
        testButton()
    }
    const testPhone = (value: number) => {
        setPhone(value)
        testButton()
    }
    const testMessage = (value: string) => {
        setMessage(value)
        testButton()
    }

    const testButton = () => {
        console.log(name)
        if (name.length >= 3) {
            if (email.length >= 11) {
                if (phone >= 10000000000) {
                    if (message.length >= 8) {
                        setEdit(false)
                    }
                }
            }
        } else {
            setEdit(true)
        }
    }

    function sendEmail(e: any) {
        console.log(e)
        e.preventDefault();


        emailjs.sendForm('service_mtj7tps', 'template_zl9m2rl', e.target,
            'user_MBKEz0Lx85KlXMgE8JZop')
            .then((result) => {
                console.log(result);
            }, (error) => {
                console.log(error.text);
            });
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')

        setEdit(true)
        // e.reset()
    }

    const notify = () => {
        toast.success('Message sent!')
    }

    console.log(edit)
    // let wrapper = document.querySelector(".input-wrapper")
    // let textInput = document.querySelector("input[type='text']")
    //
    // textInput && textInput.addEventListener("keyup", event => {
    //     // @ts-ignore
    //     wrapper && wrapper.setAttribute("data-text", event && event.target.value);
    // });



    return (
        <div className={css.communication}>



            <form className="contact-form" onSubmit={sendEmail}>
                <div className={css.communication_table}>
                    <div style={{marginTop:'30px'}} className='input_wrapper' data-name=''>
                        <span style={{float:'left',marginTop:'10px'}}>name:</span>
                        <input key={ContactInput[0].id}
                               // placeholder={ContactInput[0].title}
                            onChange={e=>testName(e.currentTarget.value)}value={name}

                               name={'name'}
                               type={'text'}/>
                    </div>

                    <div style={{marginTop:'30px'}} className='input_wrapper' data-email=''>
                        <span style={{float:'left',marginTop:'10px'}}>email:</span>
                        <input key={ContactInput[1].id}
                               // placeholder={ContactInput[1].title}
                            onChange={e=>testEmail(e.currentTarget.value)} value={email}

                               name={"email"}
                               type="text"/>
                    </div>

                    <div style={{marginTop:'30px'}} className='input_wrapper' data-text=''>
                        <span style={{float:'left',marginTop:'10px'}}>phone:</span>
                        <input key={ContactInput[2].id}
                               // placeholder={ContactInput[2].title}
                            onChange={e=>testPhone(+e.currentTarget.value)} value={phone}
                               name="phone"
                               type="number"/>
                    </div>


                    <div style={{marginTop:'30px'}} className='input_wrapper'>
                        <span style={{float:'left',marginTop:'10px'}}>message:</span>
                        <input key={ContactInput[3].id}
                               // placeholder={ContactInput[3].title}
                            onChange={e=>testMessage(e.currentTarget.value)} value={message}

                               name="message"
                               type="text"/>
                    </div>

                    <div  className={!edit ? css.buttonOn : css.buttonOff}>
                        <button disabled={edit} onClick={notify}>Send</button>
                        <Toaster
                            position="top-center"
                            reverseOrder={false}
                        />
                    </div>
                </div>
            </form>

        </div>
    )
}
