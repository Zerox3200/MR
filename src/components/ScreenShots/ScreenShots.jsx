import React from 'react'
import { ScreenImages } from './ScreenShotsimages'
import Swal from 'sweetalert2';
import './ScreenShots.scss';
import Slider from 'react-slick';

export default function ScreenShots() {
    // const Images = useRef();
    // const InView = useInView(Images, { once: true });

    const ScreenDetails = (screen) => {
        Swal.fire({
            imageUrl: screen,
            imageHeight: 600,
            imageAlt: "A tall image",
            confirmButtonText: "العوده",
            showCloseButton: true
        })
    };
    const settings = {
        className: 'slider-book',
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
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

    return <>
        {/* <div className="back-section" id='opnion' ref={Images}>
            <h1 className='text-center mt-10 opiniosTitle text-2xl'>ENGLISHIANO اراء عملاء</h1>
            <div className="grid grid-cols-1 md:grid-cols-10 gap-4 px-10 mt-10">
                {ScreenImages.map((screens, index) => <motion.div className='ScreenContainer rounded-lg flex items-center'
                    key={screens.id} onClick={() => ScreenDetails(screens.screen)} initial={{ opacity: 0 }}
                    animate={InView && { opacity: 1 }} transition={{ duration: 1, delay: (index * 0.1), type: "spring" }}>
                    <img className="ScreenShot h-auto max-w-full rounded-lg object-contain cursor-pointer  z-0"
                        src={screens.screen} alt="Screens" loading='lazy' />
                </motion.div>)}

            </div>
        </div> */}


        <div className="slider-container-screens " >
            <Slider {...settings}>
                {ScreenImages.map((screens) => <div key={screens.id}>
                    <img src={screens.screen} alt="..." loading='lazy' onClick={() => ScreenDetails(screens.screen)} />
                </div>)}

            </Slider>

        </div >

    </>


}
