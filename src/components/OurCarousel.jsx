import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const OurCarousel = () => {
    let carousel_item = [{
        image: "carousel1.jpeg",
        text: "Image 1"
    }, {
        image: "carousel2.jpeg",
        text: "Image 2"
    }, {
        image: "carousel3.jpeg",
        text: "Image 3"
    },{
        image: "carousel1.jpeg",
        text: "Image 1"
    }, {
        image: "carousel2.jpeg",
        text: "Image 2"
    }, {
        image: "carousel3.jpeg",
        text: "Image 3"
    }]
    return (
        <Carousel autoPlay={true} interval={3000} infiniteLoop={true}>
            {
                carousel_item.map(item=>{
                    return <div className='carousel'>
                    <img src={`./images/${item.image}`} />
                    <p className="legend bg-success-subtle text-warning fs-3">{item.text}</p>
                </div>
                })
            }
        </Carousel>
    )
}

export default OurCarousel