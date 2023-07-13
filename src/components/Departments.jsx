import React from 'react'
import { Link } from 'react-router-dom'

const Departments = () => {
    let dept_items = [{
        image: "carousel1.jpeg",
        text: "Mobiles and Smartphones"
    }, {
        image: "carousel2.jpeg",
        text: "Laptops and Computers"
    }, {
        image: "carousel3.jpeg",
        text: "Accessories"
    }, {
        image: "carousel1.jpeg",
        text: "Gaming Consoles"
    }]
    return (
        <>
            <div className="card-group">
                {
                    dept_items.map(item => {
                        return <div className="card">
                        <img src={`./images/${item.image}`} className="card-img-top" alt={item.text} />
                        <div className="card-body">
                          <h5 className="card-title">{item.text}</h5>
                          
                          <Link to={'#'}>See More...</Link>
                          <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>

                        </div>
                      </div>
                    })
                }
            </div>
        </>
    )
}

export default Departments