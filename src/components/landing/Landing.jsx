import React from 'react'
import './Landing.scss'
import Slider from "react-slick";
import { Images } from './Images';


export default function Landing() {

    const settings = {
        className: 'slider-book',
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700,
        autoplaySpeed: 1200,
        prevArrow: null,
        nextArrow: null,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return <div className="slider-container " >
        <Slider {...settings}>
            {Images.map((img) => <div key={img.id}>
                <img src={img.image} alt="..." loading='lazy' />
            </div>)}

        </Slider>
    </div >
}
