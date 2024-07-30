import React, { useRef } from 'react'
import './Oreder.scss'
import { useFormik } from 'formik'
import { useInView, motion } from 'framer-motion'
import { Label, Textarea } from 'flowbite-react';

export default function Order() {

    const Input1 = useRef();
    const InView = useInView(Input1, { once: true });

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            quantitiy: "",
            loc: ""
        }
    });

    return <div className='Order py-6' id='order'>
        <h1 className='text-2xl text-center'> أطلب الأن من هنا</h1>

        <form onSubmit={formik.handleSubmit} className='text-right mt-10 flex flex-col justify-center'>

            <div className="grid gap-6 mb-6 md:grid-cols-2 px-6">
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الأسم</label>
                    <motion.input type="text" id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                        focus:border-blue-500 block w-full p-2.5"  placeholder=" أكتب الأسم بالكامل هنا" required ref={Input1}
                        initial={{ opacity: 0, y: 10 }} animate={InView && { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring" }} />
                </div>

                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">العنوان</label>
                    <motion.input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder=" اكتب العنوان بالتفصيل هنا عشان يوصلك الطلب بسهوله لحد البيت" required
                        initial={{ opacity: 0, y: 10 }} animate={InView && { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", delay: 0.2 }} />
                </div>

                <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">المحاظة</label>
                    <motion.input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5" placeholder="أسم المحافظه" required
                        initial={{ opacity: 0, y: 10 }} animate={InView && { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", delay: 0.3 }} />
                </div>

                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رقم هاتف</label>
                    <motion.input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5" placeholder="اكتب رقم هاتفك و اتأكد انه 11 رقم"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required initial={{ opacity: 0, y: 10 }}
                        animate={InView && { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", delay: 0.4 }} />
                </div>

                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رقم هاتف اخر</label>
                    <motion.input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5" placeholder="رقم هاتف اخر"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required initial={{ opacity: 0, y: 10 }}
                        animate={InView && { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", delay: 0.4 }} />
                </div>

                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ملاحظات اخري</label>
                    <Textarea id="comment" placeholder="لو عندك ملاحظات بخصوص الأوردر اكتبها هنا" required rows={4} />
                </div>

            </div>

            <motion.button type="submit" className="text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300
             font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition" initial={{ opacity: 0, y: 10 }}
                animate={InView && { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", delay: 0.6 }} >اطلب الأن</motion.button>

        </form>


    </div>

}
