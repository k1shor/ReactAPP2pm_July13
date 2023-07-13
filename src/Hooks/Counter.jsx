import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from './GlobalContext'

const Counter = () => {
    //  let count = 0
    // let [variablename, function] = useState(initial_value)
    // variablename : state variable
    // function: function to update the statevariable
    // initial_value: starting value
    // 0-9 : number
    // ""  : string
    // []  : array
    // {}  : object
    // true/false : boolean
    let [count, setCount] = useState(0)
    let [data, setData] = useState(50)



    // useEffect
    // to show side effects when a state variable is updated
    // useEffect(function, [dependency])
    // function : side effect to be seen
    // dependency: state variables that trigger the function
    // [var1, var2] : effect is seen when page loads or var1 or var2 is updated
    // [] : effect is seen on page load only
    // null : effect is seen everytime any  variable updates

    useEffect(()=>{
        alert("Count is updated")
    }, [])


    const updateCount = e => {
        e.preventDefault()
        setCount(++count)
        console.log(count)
    }

// data - statevariable
// increase/decrease by 10 -
// initial value - 50
// range 0 - 100

let info = useContext(GlobalContext)
console.log(info)

    return (
        <div className='w-100 d-flex justify-content-center align-items-center flex-column' style={{ height: '80vh' }}>
            {info}
            <h3>Count : {count}</h3>
            {
                count < 10 &&
                <button onClick={updateCount} className='btn btn-info'>Increase Count</button>
            }
            {
                count > 0 && 
                <button onClick={() => { return setCount(--count) }} className='btn btn-danger'>Decrease Count</button>
            }
            {
                count != 0 &&
                <button onClick={() => { return setCount(0) }} className='btn btn-success'>Reset Count</button>
            }
            <h3>Data : {data}</h3>
            {
                count < 10 &&
                <button onClick={()=>{return setData(data + 10)}} className='btn btn-info'>Increase Count</button>
            }
        </div>
    )
}

export default Counter