import React, { useEffect, useState } from 'react';
import './Nav.scss'
import Logo from '../../Assets/Logo.png'

export default function Nav({ setScrolled, Scrolled }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    useEffect(() => {
        const handleScroll = () => {
            const offset = window.pageYOffset;
            if (offset > 0) {
                setScrolled(true);
            } else if (offset === 0) {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [Scrolled]);


    return (
        <nav className={Scrolled ? "border-gray-200 fixed w-full transition Scrolled" : "border-gray-200 transition"}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex flex-col justify-center items-center space-x-3 rtl:space-x-reverse">
                    <img src={Logo} width={"120px"} height={"120px"} alt="Flowbite Logo" />
                    <h1 className="text-h5 m-0">Ahmed Hanady</h1>
                </div>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                        <li>
                            <p className="block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">
                                الأراء</p>
                        </li>
                        <li>
                            <p className="block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">
                                الأسئله الشائعه
                            </p>
                        </li>
                        <li>
                            <p className="block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">
                                أطلب الأن
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
