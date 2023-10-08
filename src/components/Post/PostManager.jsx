import PostList from "./PostList.jsx";
import {Route, Routes} from "react-router-dom";
import Post from "./Post.jsx";
import AddPost from "./AddPost.jsx";
import {useGetAllPostsQuery} from "../../app/services/postApi.js";

function PostManager() {
    const {data: posts} = useGetAllPostsQuery()
    return (
        <>

            <h1 className={'text-center'}>Posts ({posts.length})</h1><hr/>
            <div className="d-flex bd-highlight">
                <div className="p-2 flex-shrink-1 bd-highlight">
                    <PostList/>
                </div>
                <div className="p-2 w-100 bd-highlight mt-5">
                    <div>
                        <Routes>
                            <Route path='/posts/:id' element={<Post/>}/>
                            <Route path='*' element={
                                <div className="alert alert-info" role="alert">
                                    <strong>Please choose your post</strong>
                                </div>
                            }/>
                        </Routes>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container w-50 my-5">
                <h1>Add post</h1>
                <AddPost/>
            </div>
        </>
    );
}

export default PostManager;