import React, { useState } from 'react';
import './Nav.scss'
import { Link } from 'react-router-dom';
export default function Nav({ setScrolled, Scrolled }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const specificSection = document.getElementById('opnion');
        window.scrollTo({
            behavior: 'smooth',
            top: specificSection.offsetTop,
        });
    };
    const scrollToSection2 = (id) => {
        const specificSection = document.getElementById('question');
        window.scrollTo({
            behavior: 'smooth',
            top: specificSection.offsetTop,
        });
    };
    const scrollToSection3 = (id) => {
        const specificSection = document.getElementById('order');
        window.scrollTo({
            behavior: 'smooth',
            top: specificSection.offsetTop,
        });
    };


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (<>
        <h1 className='sponser'>
            <marquee behavior="alternate" scrolldelay="50" direction="left">
                <div className="flex gap-x-1">
                    {/* <span>
                        الأكثر مبيعا في مصر والوطن العربي
                    </span>
                    <span>
                        ELNGLISHIANO

                    </span>
                    <span>
                        مجموعة كتب
                    </span> */}
                    <span>
                        الكتب الأكثر مبيعاً في مصر  و الوطن العربي 
                    </span>

                </div>
            </marquee>
        </h1>
        <nav className={Scrolled ? "border-gray-200 fixed w-full transition Scrolled" : "border-gray-200 transition"}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex flex-col justify-center items-center space-x-3 rtl:space-x-reverse">
                    <h1 className='text-3xl mb-2 font-black text-left italic '>ENGLISH<span className='text-left text-3xl font-black'>IANO</span></h1>
                    <h1 className='text-sm text-left font-bold mb-2 logo_name italic'>AHMED <span className=' italic '>HANADY</span> </h1>
                </div>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg 
                     md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0
                     dark:border-gray-700">
                        <Link to="/#opnion" onClick={scrollToSection}>
                            <li>
                                <p className="block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">
                                    الأراء</p>
                            </li>
                        </Link>
                        <Link to="/#" onClick={scrollToSection2}>
                            <li>
                                <p className="block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">
                                    الأسئله الشائعه
                                </p>
                            </li>
                        </Link>

                        <Link to="/#order" onClick={scrollToSection3}>
                            <li>
                                <p className="block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">
                                    أطلب الأن
                                </p>
                            </li>
                        </Link>

                    </ul>
                </div>
            </div>
        </nav>
    </>
    );
}
