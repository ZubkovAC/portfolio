import React, {useState} from 'react';
import './App.css';
import {Header} from "./01_Header/Header";
import {Skills} from "./03_Skills/Skills";
import {Works} from "./04_MyWorks/Works";
import {Contact} from "./05_Contact/Contact";
import {Footer} from "./06_Footer/Footer";
import {Face} from "./02_Face/Face";

// import { MyDocument} from "./07-CV/CV";
import {PDFViewer} from '@react-pdf/renderer';
import {CV} from "./07-CV/CV";

function App() {


    return (
        <div className="App">
            <Header/>
            <CV/>
            {/*<PDFViewer >*/}
            {/*    <MyDocument/>*/}
            {/*</PDFViewer>*/}
            <Face/>
            <Skills/>
            <Works/>
            <Contact/>
            <Footer/>
            {/*<Header2/>*/}
        </div>
    );
}

export default App;
