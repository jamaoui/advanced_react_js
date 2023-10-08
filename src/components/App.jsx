import {Route, Routes} from "react-router-dom";
import PostManager from "./Post/PostManager.jsx";

function App() {

    return <>
            <Routes>
                <Route path={'*'} element={<PostManager/>}/>
            </Routes>
        </>
}

export default App;