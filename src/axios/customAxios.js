import axios from "axios";

const customAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 5000,
    headers: {
        //Authorization: 'token'
    }
})
//customAxios.defaults.headers.get['Authorization'] = 'token'

// Request (...)
customAxios.interceptors.request.use(request => {
    request.headers.Authorization = 'ifjzefez#{ç_é"ç_"éç'
    request.url = request.url + '?start=0&_limit=20'
    return request
})

// Response (...)
customAxios.interceptors.response.use(AxiosResponse => {
    AxiosResponse.data = AxiosResponse.data.map((value) => {
        return {...value, id: String(value.id).padStart(10, '0')}
    })
    return AxiosResponse
})
export default customAxios