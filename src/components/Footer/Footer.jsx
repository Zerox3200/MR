import './Footer.scss'
import React, { useEffect, useState } from 'react'
export default function Footer() {
    const [button, setbutton] = useState(true)
    useEffect(() => {
        console.log(window.pageYOffset);
        window.addEventListener('scroll', () => {
            if (window.pageYOffset <= 988) {
                setbutton(true)
                return;
            }
            if (window.pageYOffset >= 988 && window.pageYOffset <= 2287) {
                setbutton(true)
                return;
            }
            if (window.pageYOffset >= 2287 && window.pageYOffset <= 3560) {
                setbutton(true)
                return;
            }
            if (window.pageYOffset >= 3560 && window.pageYOffset <= 5229) {
                setbutton(true)
                return;
            }
            if (window.pageYOffset >= 5957.60009765625 && window.pageYOffset <= 6900) {
                setbutton(false)
                return;
            }

        })
    })

    return <>
        <div className='footer-fixed'>
            <button>اطلب الان واستثمر في نفسك</button>
        </div>
    </>
}
