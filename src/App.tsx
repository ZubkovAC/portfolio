import React, {useState} from 'react';
import './App.css';
import {Header} from "./01_Header/Header";
import {Skills} from "./03_Skills/Skills";
import {Works} from "./04_MyWorks/Works";
import {Contact} from "./05_Contact/Contact";
import {Footer} from "./06_Footer/Footer";
import {Face} from "./02_Face/Face";
import {MenuOff} from "./01_Header/MenuOff";
import {NavLink} from "react-router-dom";
import {CV} from "./07-CV/CV";


function App() {

    return (
        <div className="App">
            <div >

                <Header/>
                <CV/>
                <Face/>
                <Skills/>
                <Works/>
                <Contact/>
                <Footer/>

                {/*<Header2/>*/}
            </div>


        </div>
    );
}


export default App;
