import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.css'
import App from "./components/App.jsx";
import {ModeToggle} from "./components/mode-toggle.jsx";
import {Button} from "./components/ui/button.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className={''}>
            <App>
                <ModeToggle/>
                <Button>Hi</Button>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa, debitis delectus eos eum fugit
                iusto magni natus non nulla pariatur quam quidem reiciendis sapiente sint, sunt vel? Quas, velit.
            </App>
        </div>

    </React.StrictMode>,
)
