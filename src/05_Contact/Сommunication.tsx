import css from './Contact.module.scss'
import {Input} from "../components/Input/Input";
import emailjs from 'emailjs-com';

type ContactInputType = {
    id: number
    title: string
    type: 'text' | 'number' | "email" | "submit"
    name: "phone" | "name" | "email" | 'pass' | 'message'
    value?: 'Send'
}

const ContactInput: ContactInputType[] = [
    {id: 100, title: 'Name', type: "text", name: "name"},
    {id: 101, title: 'Email', type: 'email', name: "email"},
    {id: 102, title: 'Phone', type: 'number', name: "phone"},
    {id: 103, title: 'Message', type: 'text', name: "message"},
    {id: 104, title: 'xyi', type: 'submit', name: "pass", value: 'Send'},
]

export const Communication = () => {

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
                    {
                        ContactInput.map(c => {
                            return <Input key={c.id} value={c.value} title={c.title} name={c.name} type={c.type}/>
                        })
                    }
                </div>
            </form>
        </div>
    )
}
