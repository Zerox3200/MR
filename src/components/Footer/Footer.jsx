import './Footer.scss'
import React from 'react'
import { Link } from "react-router-dom"

export default function Footer() {

    const scrollToSection3 = (e) => {
        e.preventDefault();
        const section = document.getElementById('order');
        if (section) {
            const offsetTop = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    // useEffect(() => {
    //     console.log(window.pageYOffset);
    //     window.addEventListener('scroll', () => {
    //         if (window.pageYOffset <= 988) {
    //             setbutton(true)
    //             return;
    //         }
    //         if (window.pageYOffset >= 988 && window.pageYOffset <= 2287) {
    //             setbutton(true)
    //             return;
    //         }
    //         if (window.pageYOffset >= 2287 && window.pageYOffset <= 3560) {
    //             setbutton(true)
    //             return;
    //         }
    //         if (window.pageYOffset >= 3560 && window.pageYOffset <= 5229) {
    //             setbutton(true)
    //             return;
    //         }
    //         if (window.pageYOffset >= 5957.60009765625 && window.pageYOffset <= 6900) {
    //             setbutton(false)
    //             return;
    //         }

    //     })
    // })

    return <>
        <Link to="/#order" onClick={scrollToSection3}>
            <div className='footer-fixed'>
                <button>اطلب الآن من هنا و استفيد بالشحن المجاني</button>
            </div>
        </Link>
    </>
}
