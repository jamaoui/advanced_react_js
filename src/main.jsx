import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {store} from "./app/store.js";
import App from "./components/App.jsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)
