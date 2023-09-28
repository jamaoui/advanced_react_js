import {useEffect, useState} from "react";
import customAxios from "./axios/customAxios.js";
import axios from "axios";

export default function TodoList() {
    const url = 'https://jsonplaceholder.typicode.com/todos?start=0&_limit=10'
    const [todos, setTodos] = useState([])
    const fetchDataWithFetchApi = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setTodos(data)
    }

    const fetchDataWithAxios = async () => {
        axios.all([
            customAxios.get('/todos'),
        ]).then(axios.spread((data) => {
            setTodos(data.data)
        }))

    }
    useEffect(() => {
        fetchDataWithAxios()
    }, []);
    return (
        <>
            <h2 className='text-primary'>Todo List</h2>
            <hr/>
            <table className="table table-responsive text-center">
                <thead className="thead-inverse">
                <tr>
                    <th>#id</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((todo) => <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td><span
                        className={`badge bg-${todo.completed ? 'success' : 'danger'} rounded-5 border-1`}>&nbsp;</span>
                    </td>
                </tr>)}

                </tbody>
            </table>

        </>
    );
}