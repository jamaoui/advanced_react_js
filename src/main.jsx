import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from "./Form.jsx";
import {LocalValue} from "./LocalValue.jsx";
import DarkMode from "./DarkMode.jsx";
import {Mood} from "./Mood.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className={'container'}>
            <Form/><hr className={'my-5'}/>
            <LocalValue/><hr className={'my-5'}/>
            <DarkMode/><hr className={'my-5'}/>
            <Mood/><hr className={'my-5'}/>
        </div>
    </React.StrictMode>,
)
