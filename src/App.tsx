import React from 'react';
import './App.css';
import {Header} from "./01_Header/Header";
import {Skills} from "./03_Skills/Skills";
import {Works} from "./04_MyWorks/Works";
import {Contact} from "./05_Contact/Contact";
import {Footer} from "./06_Footer/Footer";
import {Face} from "./02_Face/Face";


import {CV} from "./07-CV/CV";

function App() {


    return (
        <div className="App">
            <Header/>
            <CV/>
            <Face/>
            <Skills/>
            <Works/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
