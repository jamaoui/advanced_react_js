import {Link, useParams} from "react-router-dom";
import {useQuery, useQueryClient} from "react-query";
import API from "../../Api/TodoApi.js";
import TodoCompleted from "./TodoCompleted.jsx";

function TodoShow() {
    const {id} = useParams()
    const queryClient = useQueryClient()
    const {data: todo, isLoading, isError, error} = useQuery(['todo', parseInt(id)], () => API.get(id)
        , {
            staleTime: 50000,
            initialData: () => {
                const todoData = (queryClient.getQueryData('todos')?.data)
                return todoData?.find((todoItem) => todoItem.id === parseInt(id))
            }
        })

    if (isLoading) {
        return <h6>Loading ...</h6>
    }

    if (isError) {
        return <div className="alert alert-danger" role="alert">
            <strong>Error: </strong> {error.message}
        </div>
    }


    return (
        <>
            <Link to={'/'} className={'btn btn-primary'}>Back</Link>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title"></h4>
                    <h4 className="card-title">{todo.title} ({todo.id}) <TodoCompleted completed={todo.completed}/></h4>
                </div>
            </div>
        </>
    );
}

export default TodoShow;