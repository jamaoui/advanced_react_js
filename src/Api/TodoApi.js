import customAxios from "./axios.js";

export default {
    get: async (id) => {
        const data = await customAxios.get(`/${id}`)
        return data.data
    },
    // / [GET]
    getAll: async () => {
        const data = await customAxios.get('/')
        return data.data
    },
    // / [POST]
    create: async (todo) => {
        return await customAxios.post('/', todo)
    },
    // / [PUT] {}
    update: async (todo) => {
        return await customAxios.put(`/${todo.id}`, todo)
    },
    // /:id [DELETE]
    delete: async (id) => {
        return await customAxios.delete(`/${id}`)
    },
}