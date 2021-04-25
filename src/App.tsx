import React from 'react';
import './App.css';
import {Header} from "./01_Header/Header";
import {Skills} from "./03_Skills/Skills";
import {Works} from "./04_MyWorks/Works";
import {Contact} from "./05_Contact/Contact";
import {Footer} from "./06_Footer/Footer";
import {Face} from "./02_Face/Face";
import {TestComponent} from "./components/TestComponent";

function App() {
    return (
        <div className="App">
            <div className='container'>
                <Header/>
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
