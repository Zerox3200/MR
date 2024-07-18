import React from 'react'
import { ScreenImages } from './ScreenShotsimages'
import Swal from 'sweetalert2';
import './ScreenShots.scss'

export default function ScreenShots() {

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
        <div className="back-section">
            <h1 className='text-center mt-10 opiniosTitle text-2xl'>ENGLISHIANO اراء عملاء</h1>
            <div className="grid grid-cols-1 md:grid-cols-10 gap-4 px-10 mt-10">
                {ScreenImages.map((screens) => <div className='ScreenContainer rounded-lg flex items-center' key={screens.id} onClick={() => ScreenDetails(screens.screen)}>
                    <img className="ScreenShot h-auto max-w-full rounded-lg object-contain cursor-pointer  z-0"
                        src={screens.screen} alt="Screens" loading='lazy' />
                </div>)}

            </div>
        </div>
    </>


}
