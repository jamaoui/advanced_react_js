import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoList from "./TodoList.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className='container w-50 my-5'>
            <TodoList/>
        </div>
    </React.StrictMode>,
)
