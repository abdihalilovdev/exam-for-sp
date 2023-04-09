import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Order from "./components/Order";
import Busy from "./components/Busy";
import Result from "./components/Result";
import Getting from "./components/Getting";
import Partners from "./components/Partners";

function App() {
    const [mode,setMode] = useState(false)
    return (
        <div className="App" style={{
            background: mode ? 'black' : '',
            color: mode ? 'white' : ''
        }}>
            <Header mode={mode} setMode={setMode}/>
            <Hero/>
            <Order/>
            <Busy/>
            <Result/>
            <Getting/>
            <Partners/>
        </div>
    );
}

export default App;
