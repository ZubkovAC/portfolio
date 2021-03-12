import React from "react";
import css from './Contact.module.scss'

export const Thoughts = () => {
    return (
        <div className={css.thoughts}>
            <div className={css.h3_title}>
                <h3>Great sayings </h3>
            </div>

            <div className={css.great_sayings}>
                you can't easily pull a fish out of a pond

            </div>

            <div className={css.great_sayings}>
                water sharpens the stone
            </div>
            <div className={css.great_sayings}>
                patience and hard work will wear everything out
            </div>

        </div>
    )
}
