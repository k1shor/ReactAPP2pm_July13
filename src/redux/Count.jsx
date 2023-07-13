import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Count = () => {
    // let countStore = useSelector(store=>store.counterStore)
    // let count = countStore.count

    // let {data, count} = useSelector(store=>store.counterStore)

    let count = useSelector(store => store.counterStore.count)
    let data = useSelector(store=>store.counterStore.data)
    let dispatch = useDispatch()

    return (
        <div className='w-100 d-flex justify-content-center align-items-center flex-column' style={{ height: '80vh' }}>
            <h1>Count: {count}</h1>
            <div className='btn-group'>
                <button className='btn btn-success' 
                onClick={()=>{return dispatch({type: "INCREASE"})}}
                >Increase</button>
                <button className='btn btn-warning'>Decrease</button>
                <button className='btn btn-danger'>RESET</button>
            </div>
            <h1>Data: {data}</h1>
            <div className='btn-group'>
                <button className='btn btn-success' 
                onClick={()=>{return dispatch({type: "INCREASE_DATA"})}}
                >Increase</button>
                <button className='btn btn-warning'>Decrease</button>
                <button className='btn btn-danger'>RESET</button>
            </div>

        </div>
    )
}

export default Count