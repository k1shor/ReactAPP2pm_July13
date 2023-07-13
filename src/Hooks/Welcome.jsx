import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Welcome = () => {
    let params = useParams()
    let n = params.name

    let myRef = useRef()
    myRef.current = 0

    let navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/counter')
    }

const increase = () => {
    myRef.current++
    console.log(myRef.current)
}


    // let {name} = useParams()
    return (
        <div>
            <h1>
                {myRef.current}
                <button className='btn btn-warning' onClick={increase}>Increase ref</button>
                Welcome, {n}
                <button className='btn btn-success' onClick={handleNavigate}>Click me</button>
            </h1>
        </div>
    )
}

export default Welcome