import Loader from "../Loader/Loader.jsx";
import {useAddPostMutation} from "../../app/services/postApi.js";

export default function AddPost() {


    const [addPost, {isLoading, isError, error}] = useAddPostMutation()

        if (isLoading) {
            return <Loader/>
        }

        if (isError) {
            return <div className="alert alert-danger" role="alert">
                <strong>{error}</strong>
            </div>
        }

    const handleForm = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const title = formData.get('title')
        const content = formData.get('content')
        const date = new Date()
        //...
        addPost({title, content,date})
    }
    return (
        <>
            <form onSubmit={handleForm}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" className="form-control"/>
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <textarea name="content" className="form-control"></textarea>
                </div>
                <button className="btn btn-primary mt-3">Add post</button>
            </form>
        </>
    );
}
