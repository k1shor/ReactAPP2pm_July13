import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    const {id} = useParams()

    const [post, setPost] = useState({})

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=>setPost(response.data))
        .catch(error=>console.log(error))
    },[])

  return (
    <div className='m-5 p-5 shadow-lg rounded-5'>
        <h1>{post.id}. {post.title}</h1>
        <p className='fs-3'>{post.body}</p>
    </div>
  )
}

export default Post