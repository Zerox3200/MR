import React, { useRef } from 'react'
import './Oreder.scss'
import { useFormik } from 'formik'
import { useInView, motion } from 'framer-motion'
import { Textarea } from 'flowbite-react';
import { ImCheckmark } from "react-icons/im";

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
        <div className='offers-2'>
            <span className='flex items-center'>
                <ImCheckmark />الدفع عند الإستلام
            </span>
            <span className='flex items-center'>
                <ImCheckmark />  الشحن مجاني
            </span>
            <span className='flex items-center'>
                <ImCheckmark /> الإجمالي 299
            </span>
        </div>

        <h1 className='text-2xl text-center'> اطلب الأن من هنا</h1>
        <form onSubmit={formik.handleSubmit} className='text-right mt-10 flex flex-col justify-center'>

            <div className="grid gap-6 mb-6 md:grid-cols-2 px-6 ">
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الاسم</label>
                    <motion.input dir='rtl' type="text" id="first_name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                        focus:border-blue-500 block w-full p-2.5"  placeholder="  اكتب الاسم هنا" required ref={Input1}
                        initial={{ opacity: 0, y: 10 }} animate={InView && { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring" }} />
                </div>

                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">العنوان بالتفصيل</label>
                    <motion.Textarea dir='rtl' type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="اكتب عنوانك هنا بالتفصيل مع ذكر المحافظة - اسم المنطقة - اسم الشارع - رقم العمارة - علامة مميزة إن وُجِد" required
                        initial={{ opacity: 0, y: 10 }} animate={InView && { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", delay: 0.2 }} />
                </div>

                <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">المحافظة</label>
                    <motion.input dir='rtl' type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5" placeholder="أسم المحافظه" required
                        initial={{ opacity: 0, y: 10 }} animate={InView && { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", delay: 0.3 }} />
                </div>

                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رقم التليفون</label>
                    <motion.input dir='rtl' type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5" placeholder="اكتب رقم تليفونك هنا و تأكد أنه 11 رقم و تأكد أنه صحيح"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required initial={{ opacity: 0, y: 10 }}
                        animate={InView && { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", delay: 0.4 }} />
                </div>

                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رقم تليفون اخر </label>
                    <motion.input type="tel" dir='rtl' id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5" placeholder="رقم تليفون اخر"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required initial={{ opacity: 0, y: 10 }}
                        animate={InView && { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", delay: 0.4 }} />
                </div>

                <div>
                    <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">:اختر عدد النسخ</label>
                    <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                     focus:border-blue-500 block w-full p-2.5" id="quantity" name='quantity' min={1} max={5} />
                </div>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={InView && { opacity: 1, y: 0 }} transition={{ duration: 0.8, type: "spring", delay: 0.6 }} >
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-end text-gray-900 dark:text-white">ملاحظات </label>
                    <Textarea id="comment" dir='rtl' placeholder="لو عندك ملاحظات بخصوص الأوردر من فضلك اكتبها هنا" required rows={4} />
                </motion.div>
            </div>

            <motion.button type="submit" className="text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300
             font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition" initial={{ opacity: 0, y: 10 }}
                animate={InView && { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring", delay: 0.6 }} >اطلب الأن</motion.button>

        </form>


    </div>

}
