import React, { useRef } from 'react'
import { ScreenImages } from './ScreenShotsimages'
import Swal from 'sweetalert2';
import './ScreenShots.scss';
import { motion, useInView } from 'framer-motion';

export default function ScreenShots() {
    const Images = useRef();
    const InView = useInView(Images, { once: true });

    const ScreenDetails = (screen) => {
        Swal.fire({
            imageUrl: screen,
            imageHeight: 600,
            imageAlt: "A tall image",
            confirmButtonText: "العوده",
            showCloseButton: true
        })
    };

    return <>
        <div className="back-section" id='opnion' ref={Images}>
            <h1 className='text-center mt-10 opiniosTitle text-2xl'>ENGLISHIANO اراء عملاء</h1>
            <div className="grid grid-cols-1 md:grid-cols-10 gap-4 px-10 mt-10">
                {ScreenImages.map((screens, index) => <motion.div className='ScreenContainer rounded-lg flex items-center'
                    key={screens.id} onClick={() => ScreenDetails(screens.screen)} initial={{ opacity: 0 }}
                    animate={InView && { opacity: 1 }} transition={{ duration: 1, delay: (index * 0.1), type: "spring" }}>
                    <img className="ScreenShot h-auto max-w-full rounded-lg object-contain cursor-pointer  z-0"
                        src={screens.screen} alt="Screens" loading='lazy' />
                </motion.div>)}

            </div>
        </div>
    </>


}
