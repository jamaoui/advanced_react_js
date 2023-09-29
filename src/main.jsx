import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoList from "./Components/Todo/TodoList.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import TodoCreate from "./Components/Todo/TodoCreate.jsx";
import TodoUpdate from "./Components/Todo/TodoUpdate.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<TodoList/>}/>
                    <Route path={'/todo/create'} element={<TodoCreate/>}/>
                    <Route path={'/todo/:id/update/'} element={<TodoUpdate/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
)
