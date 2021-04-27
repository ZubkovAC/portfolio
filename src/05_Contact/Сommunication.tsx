import css from './Contact.module.scss'
import {Input} from "../components/Input/Input";
import emailjs from 'emailjs-com';
import {useState} from "react";
import  './../components/Input/Input.module.scss'
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

    const [name,setName]=useState<string>('')
    const [email,setEmail]=useState<string>('')
    const [phone,setPhone]=useState<any>(null)
    const [message,setMessage]=useState<string>('')

    const testName =(value:string) => {
        setName(value)
    }
    const testEmail =(value:string) => {
        setEmail(value)
    }
    const testPhone =(value:number) => {
        setPhone(value)
    }
    const testMessage =(value:string) => {
        setMessage(value)
    }


    const sendEmail = (e: any) => {
            e.preventDefault();

            emailjs.sendForm('service_mtj7tps', 'template_zl9m2rl', e.target,
                'user_MBKEz0Lx85KlXMgE8JZop')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset()
        }

    return (
        <div className={css.communication}>

            <form className="contact-form" onSubmit={sendEmail}>
                <div className={css.communication_table}>
                    <div className='input_wrapper'>
                        <input key={ContactInput[0].id} value={name} placeholder={ContactInput[0].title}
                               onChange={e=>testName(e.currentTarget.value)}
                               name={ContactInput[0].name}
                               type={ContactInput[0].type}/>
                    </div>
                   <div className='input_wrapper'>
                       <input key={ContactInput[1].id} value={email} placeholder={ContactInput[1].title}
                              onChange={e=>testEmail(e.currentTarget.value)}
                              name={ContactInput[1].name}
                              type={ContactInput[1].type}/>
                   </div>

                    <div className='input_wrapper'>
                        <input key={ContactInput[2].id} value={phone} placeholder={ContactInput[2].title}
                               onChange={e=>testPhone(+e.currentTarget.value)}
                               name={ContactInput[2].name}
                               type={ContactInput[2].type}/>
                    </div>
                    <div className='input_wrapper'>
                        <input key={ContactInput[3].id} value={message} placeholder={ContactInput[3].title}
                               onChange={e=>testMessage(e.currentTarget.value)}
                               name={ContactInput[3].name}
                               type={ContactInput[3].type}/>
                    </div>

                        <button>'Send'</button>
                    {/*{*/}
                    {/*    ContactInput.map(c => {*/}
                    {/*        return <Input key={c.id} value={c.value} title={c.title}  onText={testLength} name={c.name} type={c.type}/>*/}
                    {/*    })*/}
                    {/*}*/}
                </div>

            </form>
        </div>
    )
}
