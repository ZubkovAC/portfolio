import React from "react";
import css from './Face.module.scss'


export const Face=()=>{
    return(
        <div className={css.works} id='MainPage'>
            <div className={css.box_works}>
                <div className={css.face_title}>
                     <h3 className={css.h3_text} style={{margin:'0px',padding:'10px'}}>
                       Portfolio  <span className={css.Test}>
                       <span className={css.Test1}>Z</span>
                       <span className={css.Test2}>ybkov </span>
                       <span className={css.Test3}> A.C.</span>
                        </span>
                    </h3>
                    {/*<h4 className={css.h4_text} style={{margin:'0px'}}>(Upgrade in progress.)</h4>*/}
                    {/*<h4 className={css.h4_text}>*/}
                    {/*    Welcome to Portfolio Zybkov A.C.*/}
                    {/*</h4>*/}
                </div >

            </div>
        </div>
    )
}


