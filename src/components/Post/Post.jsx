import Loader from "../Loader/Loader.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useDeletePostMutation, useGetPostQuery} from "../../app/services/postApi.js";

export default function Post() {

    const {id} = useParams()
    const navigate = useNavigate()
    const {data: post, isLoading,isError,error} = useGetPostQuery(id)
    const [deletePost, {isLoading: deleteIsLoading, isError: deleteIsError, error: deleteError}] = useDeletePostMutation()
    //
    if (isLoading || deleteIsLoading) {
        return <Loader/>
    }

    if (isError) {
        let errorMessage
        switch (error.status) {
            case 404: errorMessage = 'Post not found';break;
            default: errorMessage = 'Error'
        }
        return <div className="alert alert-danger" role="alert">
            <strong>{errorMessage}</strong>
        </div>
    }
    if (deleteIsError) {
        return <div className="alert alert-danger" role="alert">
            <strong>{deleteError}</strong>
        </div>
    }

    return (
        <>
            <h1>{post.title} <button onClick={() => {
                deletePost(post.id)
                navigate('/')
            }} className="btn btn-danger btn-sm">X</button></h1>
            <div dangerouslySetInnerHTML={{__html: post.content}}></div>
            <div>
                {post.date}
            </div>
        </>
    );
}
