import React from 'react'
import './Landing.scss'
import Slider from "react-slick";
import { Images } from './Images';
import Swal from 'sweetalert2';



export default function Landing() {

    const ScreenDetails = (screen) => {
        Swal.fire({
            imageUrl: screen,
            imageHeight: 600,
            imageAlt: "A tall image",
            confirmButtonText: "العوده",
            showCloseButton: true,
            customClass: {
                confirmButton: 'sweet',
                closeButton: 'sweet-button'
            }
        })
    };
    const settings = {
        className: 'slider-book',
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        prevArrow: null,
        nextArrow: null,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    return <div className="slider-container " >
        <Slider {...settings}>
            {Images.map((img) => <div key={img.id}>
                <img src={img.image} alt="..." loading='lazy' onClick={() => ScreenDetails(img.image)} />
            </div>)}

        </Slider>

    </div >
}
