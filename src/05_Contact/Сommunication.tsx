import css from './Contact.module.css'

export const Communication = () => {
    return (
        <div className={css.communication}>

            <form action="">
                <h3>Contact</h3>
                <div className={css.communication_table}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="text" id=""></textarea>

                </div>
            </form>
        </div>
    )
}
