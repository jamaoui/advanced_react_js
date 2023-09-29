import {useEffect, useState} from "react";
import API from '../../Api/TodoApi.js'
import {Link} from "react-router-dom";

export default function TodoList() {
    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const data = await API.getAll()
            setTodos(data)
            setIsLoading(false)
        })()
    }, []);
    const deleteCallback = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const id = parseInt(e.currentTarget.dataset.id)
        await API.delete(id).then(
            () => {
                setTodos(prevState => prevState.filter(todo => todo.id !== id))
                setIsLoading(false)
            }
        )
    }
    return (
        <>
            <h2 className='text-primary'>Todo List</h2>
            <hr/>
            {
                isLoading
                    ?
                    <h6>Loading ...</h6>
                    :
                    <table className="table table-responsive text-center">
                        <thead className="thead-inverse">
                        <tr>
                            <th>#id</th>
                            <th>Title</th>
                            <th>Completed</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {todos.map((todo) => <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td><span
                                className={`badge bg-${todo.completed ? 'success' : 'danger'} rounded-5 border-1`}>&nbsp;</span>
                            </td>
                            <td>
                                <Link className={'btn btn-sm mx-1 btn-primary rounded-1'}
                                      to={`todo/${todo.id}/update`}>Update</Link>
                                <button data-id={todo.id} className={'btn btn-sm mx-1 btn-danger rounded-1'}
                                        onClick={deleteCallback}>Delete
                                </button>
                            </td>
                        </tr>)}
                        </tbody>
                    </table>
            }
        </>
    );
}