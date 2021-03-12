import css from './Contact.module.scss'
import {Input} from "../components/Input/Input";

export const Communication = () => {
    return (
        <div className={css.communication}>

            <form action="">
                <div className={css.communication_table}>
                    <Input title={'Name'}/>
                    <Input title={'Address'}/>
                    <Input title={'Phone'}/>
                    <Input title={'Message'}/>
                    <button type='submit'>submit</button>

                </div>
            </form>
        </div>
    )
}
