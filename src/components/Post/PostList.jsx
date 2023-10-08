import {useGetAllPostsQuery} from "../../app/services/postApi.js";
import Loader from "../Loader/Loader.jsx";
import {useNavigate} from "react-router-dom";
function PostList() {
    const navigate = useNavigate()
    const {data: posts, isLoading, isError, error, refetch} = useGetAllPostsQuery()
    if (isLoading) {
        return <Loader/>
    }

    if (isError) {
        return <div className="alert alert-danger" role="alert">
            <strong>{error}</strong>
        </div>
    }
    return (
        <><button className={'btn btn-primary w-100'} onClick={refetch}>Refresh</button>
            <div className="list-group">
                {posts.map(post =>
                    <a onClick={(e) => {
                        e.preventDefault()
                        navigate(`/posts/${post.id}`)
                    }} key={post.id} href="#" className="list-group-item list-group-item-action">
                        {post.title}</a>
                )}
            </div>
        </>
    );
}

export default PostList;