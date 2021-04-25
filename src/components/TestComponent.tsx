import css from './TestComponent.module.css'

export const TestComponent= () =>{
    return (
        <div className={css.container}>
            <div className={css.btn}>
                Hello
            </div>

        </div>
    )
}