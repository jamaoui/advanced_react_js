import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/posts'
    }),
    keepUnusedDataFor: 120,
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        //CRUD
        getAllPosts: builder.query({
            query: () => '/',
            transformResponse(baseQueryReturnValue, meta, arg) {
                return baseQueryReturnValue.map(post => ({
                    ...post,
                    title: post.title.toUpperCase()
                })).sort((a, b) => b.id - a.id)
            },
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({id}) => ({type: 'Post', id})),
                        {type: 'Post', id: 'LIST'},
                    ]
                    : [{type: 'Post', id: 'LIST'}],
        }),
        getPost: builder.query({
            query: (id) => `/${id}`
        }),
        addPost: builder.mutation({
                query: (body) => ({
                    url: '/',
                    method: 'POST',
                    body
                }),
                invalidatesTags: [{
                    type: 'Post',
                    id: 'LIST'
                }]
            },
        ),
        deletePost: builder.mutation({
                query: (id) => ({
                    url: `/${id}`,
                    method: 'DELETE'
                }),
                invalidatesTags: (result, error, id) => {
                    return [{type: 'Post', id}]
                }
            },
        )
    })
})
// Dynamic hook
export const {useGetAllPostsQuery, useGetPostQuery, useAddPostMutation, useDeletePostMutation} = postApi