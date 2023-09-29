import axios from "axios";

const customAxios = axios.create({
    baseURL: 'http://localhost:3000/todos',
})
export default customAxios