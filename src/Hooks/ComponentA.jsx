import React from 'react'

const ComponentA = ({name, email, phone}) => {
    
// const ComponentA = (props) => {
// const {name, email, phone} = props

  return (
    <>
     <h1>HELLO THERE</h1>   
     <h1>Welcome, {name}</h1>
     <h2>{email}</h2>
     <h2>{phone}</h2>
    </>
  )
}

export default ComponentA