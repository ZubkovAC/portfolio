import css from './Contact.module.scss'
import {Input} from "../components/Input/Input";

type ContactInputType ={
    id:number
    title:string
    type:'text' | 'number'
}


const ContactInput:ContactInputType[] = [
    {id:100,title:'Name',type:'text'},
    {id:101,title:'Address',type:'text'},
    {id:102,title:'Phone',type:'number'},
    {id:103,title:'Message',type:'text'},
]


export const Communication = () => {
    return (
        <div className={css.communication}>

            <form action="">
                <div className={css.communication_table}>
                    {
                        ContactInput.map( c => {
                            return <Input key={c.id}  title={c.title} type={c.type}/>
                        })
                    }
                    <button type='submit'>submit</button>

                </div>
            </form>
        </div>
    )
}
