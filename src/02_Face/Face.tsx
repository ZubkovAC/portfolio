import React from "react";
import css from './Face.module.css'
import img  from './../img/samurai.jpg'

export const Face=()=>{
    return(
        <div className={css.works}>
            <div className={css.box_works}>
                    <img src={img} width='280px'alt="samurai"/>

                <div className={css.face_title}>
                    <h3 style={{margin:'0px',padding:'10px',backgroundColor:'white'}}>
                        My Works
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus optio quaerat similique. Ab assumenda autem consequuntur debitis doloribus eius impedit laudantium magni modi nesciunt nihil nobis odio perferendis quaerat, sed.</p>
                </div>


            </div>


        </div>
    )
}
