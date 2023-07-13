import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const DataFetch = () => {
    let [posts, setPosts] = useState([])

    const loadData = () => {
        return fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(response => response.json())
            .catch(error => console.log(error))
    }

    useEffect(() => {
        loadData()
            .then(data => setPosts(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            {
                posts.map(post => {
                    return <div className='m-5 p-5 shadow-lg rounded-4'>
                        <Link to={`/post/${post.id}`}>
                            <h1>{post.id}. {post.title}</h1>
                        </Link>
                    </div>
                })
            }
        </>
    )
}

export default DataFetch