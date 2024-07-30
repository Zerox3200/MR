import React, { useEffect, useState } from 'react'
import './Landing.scss'
import Slider from "react-slick";
import { Images } from './Images';
import Swal from 'sweetalert2';
import { FaEye } from "react-icons/fa";


export default function Landing() {
    const [visitorCount, setVisitorCount] = useState(Math.floor(Math.random() * 20));
    const min = 30;
    const max = 100;
    useEffect(() => {
        setInterval(() => {
            const initialViews = Math.floor(Math.random() * (max - min + 1)) + min; // Replace with actual data fetching
            setVisitorCount(initialViews);
        }, 4000);
    }, [])

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
                <img src={img.image} alt="..." loading='lazy' onClick={() => ScreenDetails(img.image)} />
            </div>)}

        </Slider>
        <h4 className='bg-orange-300 flex items-center'>
            <FaEye />
            <span>
                {visitorCount}
            </span>
            <span className='flex items-center gap-2'>
                يشاهد الأن</span>
        </h4>
    </div >
}
