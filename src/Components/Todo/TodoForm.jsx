import {useForm} from "react-hook-form";
import TodoModel from "../../Models/TodoModel.js";
import TodoApi from "../../Api/TodoApi.js";
import {Link, useParams} from "react-router-dom";

function TodoForm({isUpdate = false}) {
    const {
        register, handleSubmit,
        formState: {
            errors,
            isDirty,
            isValid,
            isLoading
        }
    } = useForm({
            defaultValues: async () => {
                if (isUpdate) {
                    return await TodoApi.get(params.id)
                }
                return {}
            }
        }
    )
    const params = useParams()
    const submitForm = (data) => {
        const todo = new TodoModel(data.title, data.completed)
        if (isUpdate) {
            const todo = new TodoModel(data.title, data.completed, data.id)
            TodoApi.update(todo).then(window.history.back())
        } else {
            TodoApi.create(todo)
        }

    }
    return (
        <>
            <h2>{isUpdate ? 'Update' : 'Create'} todo</h2>
            <hr/>
            {
                isLoading
                    ?
                    <h6>Loading ...</h6>
                    :
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div className="form-group">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" {...register('title', {
                                required: {
                                    value: 'true',
                                    message: 'Required field'
                                },
                            })}/>
                            <small className="text-danger">{errors.title?.message}</small>
                        </div>
                        <div className="form-group">
                            <input type="checkbox"
                                   className="form-check-input" {...register('completed')}/>
                            <label className='form-check-label'>&nbsp; Completed</label>
                        </div>
                        <div className="form-group mt-2">
                            <input disabled={!isValid || !isDirty} type="submit" className={'btn btn-primary'}
                                   value={isUpdate ? 'Update' : 'Create'}/>
                        </div>
                    </form>

            }

        </>
    );
}

export default TodoForm;