import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoList from "./Components/Todo/TodoList.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import TodoUpdate from "./Components/Todo/TodoUpdate.jsx";
import {QueryClient,QueryClientProvider} from "react-query";
import TodoShow from "./Components/Todo/TodoShow.jsx";
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<TodoList/>}/>
                    <Route path={'/todo/:id/update/'} element={<TodoUpdate/>}/>
                    <Route path={'/todo/:id/show'} element={<TodoShow/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
)
