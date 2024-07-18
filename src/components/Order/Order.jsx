import React from 'react'
import './Oreder.scss'
// import { useFormik } from 'formik'

export default function Order() {

    // const formik = useFormik({
    //     initialValues: {
    //         name: "",
    //         phone: "",
    //         quantitiy: "",
    //         loc: ""
    //     }
    // })

    return <div className='Order py-6'>
        <h1 className='text-2xl text-center'>حجز كتاب</h1>

        <form className='text-right mt-10 flex flex-col justify-center'>
            <div class="grid gap-6 mb-6 md:grid-cols-2 px-6">
                <div>
                    <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الأسم</label>
                    <input type="text" id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John" required />
                </div>
                <div>
                    <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                    <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                </div>
                <div>
                    <label for="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                    <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                </div>
                <div>
                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                    <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                </div>
            </div>
            <button type="submit" className="text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300
             font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600
              dark:focus:ring-blue-800 transition">شراء</button>
        </form>


    </div>

}
