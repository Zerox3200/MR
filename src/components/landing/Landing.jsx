import React from 'react'
import './Landing.scss'
import Slider from "react-slick";
import image1 from "../../Assets/IMG-20240716-WA0005.jpg"


const settings = {
    className: 'slider-book',
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
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
export default function Landing() {
    return <div className="slider-container " >
        <Slider {...settings}>
            <div>
                <img src={image1} alt="" />
            </div>
            <div>
                <img src={image1} alt="" />
            </div>
            <div>
                <img src={image1} alt="" />
            </div>
            <div>
                <img src={image1} alt="" />
            </div>
            <div>
                <img src={image1} alt="" />
            </div>
        </Slider>
    </div >
}
