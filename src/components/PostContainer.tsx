import React, { useEffect, useState } from 'react'
import { IPost } from '../models/IPost';
import { postAPI, useFetchAllPostsQuery, useFetchAllLocalPostsQuery, useCreateLocalPostMutation, useUpdateLocalPostMutation, useDeleteLocalPostMutation } from '../services/PostService'
import PostItem from './PostItem';


const PostContainer = () => {
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        setTimeout(() => {
            setLimit(50)
        }, 2000);
    }, []);

    // Using a query hook automatically fetches data and returns query values
    const { data: posts, error, isLoading, refetch } = useFetchAllLocalPostsQuery(limit, {
        //Polling gives you the ability to have a 'real-time' effect by causing a query to run at a specified interval. To enable polling for a query, pass a pollingInterval to the useQuery hook or action creator with an interval in milliseconds:
        //pollingInterval: 5000
    });

    const [createPost] = useCreateLocalPostMutation({});
    const [updatePost] = useUpdateLocalPostMutation({});
    const [deletePost] = useDeleteLocalPostMutation({});

    const handleCreate = async () => {
        const title = prompt();
        await createPost({ title, body: title } as IPost);
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post);
    }

    const handleRemove = (post: IPost) => {
        deletePost(post);
    }

    return (
        <div className='post__list'>
            {isLoading && <h1>Loading Data ...</h1>}
            {error && <h1>error occurred loading this content ...</h1>}
            <button onClick={() => refetch()}>refetch</button>
            <button onClick={handleCreate}>Add Post</button>
            {
                posts && posts.map(p =>
                    <PostItem remove={handleRemove} update={handleUpdate} key={p.id} post={p} />
                )
            }
        </div >
    )
}


export default PostContainer