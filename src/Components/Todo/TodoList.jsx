import { useState} from "react";
import API from '../../Api/TodoApi.js'
import {Link} from "react-router-dom";
import {ReactQueryDevtools} from "react-query/devtools";
import {useMutation, useQuery, useQueryClient} from "react-query";
import TodoCompleted from "./TodoCompleted.jsx";
import TodoCreate from "./TodoCreate.jsx";
import TodoApi from "../../Api/TodoApi.js";

export default function TodoList() {
    const [customError, setCustomError] = useState()
    const queryClient = useQueryClient()

    const {
        data: todos,
        isFetching,
        dataUpdatedAt,
        isLoading,
        isError,
        error,
        refetch
    } = useQuery(['todos'], API.getAll, {
        refetchOnWindowFocus: false,
        //refetchOnMount: false,
        retry: 0,
        cacheTime: 50000,
        staleTime: Infinity,
        onError: (err) => {
            setCustomError(err)
        },
        select: (data) => {
            return data.data.map((todo) => {
                return {...todo, longId: String(todo.id).padStart(5, '0')}
            })
        }
        //refetchInterval: 2000,
        //refetchIntervalInBackground: true
    })
    const TodoDeleteMutation = useMutation(variables => {
        return TodoApi.delete(variables.id)
    }, {
        onSuccess: (data, variables) => {
            const id = variables.id
            queryClient.setQueryData(['todos'], (input) => {
                return {...input, data: input.data.filter((todo) => todo.id !== id)}
            })
            //queryClient.invalidateQueries(['todos'])
            queryClient.removeQueries(['todo', id])
        }
    })

    const deleteCallback = async (e) => {
        e.preventDefault()
        TodoDeleteMutation.mutate({
            id: parseInt(e.currentTarget.dataset.id)
        })
    }

    if (isLoading) {
        return <h6>Loading ...</h6>
    }

    if (isError) {
        return <div className="alert alert-danger" role="alert">
            <strong>Error: </strong> {error.message}
        </div>
    }

    if (customError) {
        return <div className="alert alert-danger" role="alert">
            <strong>Error: </strong> {error.message}
        </div>
    }

    return (
        <>
            <TodoCreate/>
            Last update : {new Date(dataUpdatedAt).toTimeString().substring(0, 8)}
            <button disabled={isFetching} className="btn btn-primary" onClick={refetch}>Refetch</button>
            <ReactQueryDevtools/>
            <h2 className='text-primary'>Todo List</h2>
            <hr/>
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
                {todos?.map((todo) => <tr key={todo.id}>
                    <td>{todo.longId}</td>
                    <td>{todo.title}</td>
                    <td>
                        <TodoCompleted completed={todo.completed}/>
                    </td>
                    <td>
                        <Link className={'btn btn-sm mx-1 btn-success rounded-1'}
                              to={`todo/${todo.id}/show`}>Show</Link>
                        <Link className={'btn btn-sm mx-1 btn-primary rounded-1'}
                              to={`todo/${todo.id}/update`}>Update</Link>
                        <button data-id={todo.id} className={'btn btn-sm mx-1 btn-danger rounded-1'}
                                onClick={deleteCallback}>Delete
                        </button>
                    </td>
                </tr>)}
                </tbody>
            </table>
        </>
    );
}