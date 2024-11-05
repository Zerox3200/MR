import React, { useRef, useState } from 'react';
import './Order.scss';
import { Formik, useFormik } from 'formik';
import { useInView, motion } from 'framer-motion';
import { Textarea } from 'flowbite-react';
import { ImCheckmark } from "react-icons/im";
import * as Yup from 'yup';
import axios from 'axios';
import { BaseUrl } from './../../BaseUrl/url';
import toast from 'react-hot-toast';

export default function Order() {
    const input1Ref = useRef();
    const inView = useInView(input1Ref, { once: true });

    const [apiError, setApiError] = useState("");
    const [loading, setLoading] = useState(false);

    async function placeOrder(val) {
        console.log(val);
        setLoading(true);
        try {
            const { data } = await axios.post(`${BaseUrl}/order/placeorder`, val);
            if (data.message === "success") {
                toast.success('تم طلب الأوردر بنجاح');
                formik.resetForm()
            } else {
                setApiError("لقد فشل طلبك#E7603E");
            }
        } catch (error) {
            setApiError("An error occurred while placing the order");
            console.error(error);
        } finally {
            setLoading(false);
        }
    }


    const phoneRegExp = /^01[0125][0-9]{8}$/gm

    const validationSchema = Yup.object({
        name: Yup.string().required("الاسم مطلوب").max(20),
        adress: Yup.string().required("العنوان مطلوب"),
        country: Yup.string().required("يرجي إدخال اسم البلد"),
        phone: Yup.string().required("رقم التليفون مطلوب").matches(phoneRegExp, "رقم تليفون غير صحيح"),
        secondPhone: Yup.string().matches(phoneRegExp, "رقم تليفون غير صحيح"),
        numberOfbooks: Yup.string().max(1),
        comments: Yup.string().max(100),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            adress: "",
            country: "",
            phone: "",
            secondPhone: "",
            numberOfbooks: "1",
            comments: "",
        }, validationSchema, onSubmit: placeOrder
    });

    return (
        <div className='Order py-6' id='order'>
            <div className='offers-2'>
                <div className=' text-ofer'>
                    <span className='span1'>الدفع عند الإستلام</span>
                    <span className='span2'>
                        <ImCheckmark />
                    </span>
                </div>

                <div className=' text-ofer'>
                    <span className='span1'>الإجمالي 299</span>
                    <span className='span2'>
                        <ImCheckmark />
                    </span>
                </div>

                <div className=' text-ofer'>
                    <span className='span1'>الشحن مجاني</span>
                    <span className='span2'>
                        <ImCheckmark />
                    </span>
                </div>
            </div>

            <h1 className='text-2xl text-center'>اطلب الأن من هنا</h1>
            <form onSubmit={formik.handleSubmit} className='text-right mt-10 flex flex-col justify-center'>
                <div className="grid gap-6 mb-6 md:grid-cols-2 px-6">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">الاسم</label>
                        <motion.input
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            dir='rtl'
                            type="text"
                            id="name"
                            name='name'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="اكتب الاسم هنا"
                            required
                            ref={input1Ref}
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView && { opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            value={formik.values.name}
                        />
                        {formik.errors.name && formik.touched.name && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">{formik.errors.name}</div>}
                    </div>

                    <div>
                        <label htmlFor="adress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">العنوان بالتفصيل</label>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView && { opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
                        >
                            <Textarea
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                dir='rtl'
                                id="adress"
                                name='adress'
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="اكتب عنوانك هنا بالتفصيل مع ذكر المحافظة - اسم المنطقة - اسم الشارع - رقم العمارة - علامة مميزة إن وُجِد"
                                value={formik.values.adress}
                            />
                        </motion.div>
                        {formik.errors.adress && formik.touched.adress && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">{formik.errors.adress}</div>}
                    </div>

                    <div>
                        <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">المحافظة</label>
                        <motion.input
                            dir='rtl'
                            type="text"
                            id="country"
                            name='country'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="أسم المحافظه"
                            required
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView && { opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, type: "spring", delay: 0.3 }}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.country}
                        />
                        {formik.errors.country && formik.touched.country && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">{formik.errors.country}</div>}
                    </div>

                    <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رقم التليفون</label>
                        <motion.input
                            dir='rtl'
                            type="text"
                            id="phone"
                            name='phone'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="اكتب رقم تليفونك هنا و تأكد أنه 11 رقم و تأكد أنه صحيح"
                            required
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView && { opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                        />
                        {formik.errors.phone && formik.touched.phone && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">{formik.errors.phone}</div>}
                    </div>

                    <div>
                        <label htmlFor="secondPhone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رقم تليفون اخر</label>
                        <motion.input
                            type="text"
                            dir='rtl'
                            id="secondPhone"
                            name='secondPhone'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="رقم تليفون اخر"
                            initial={{ opacity: 0, y: 10 }}
                            animate={inView && { opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, type: "spring", delay: 0.4 }}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.secondPhone}
                        />
                        {formik.errors.secondPhone && formik.touched.secondPhone && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">{formik.errors.secondPhone}</div>}
                    </div>

                    <div>
                        <label htmlFor="numberOfBooks" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">اختر عدد النسخ</label>
                        <input
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            id="numberOfbooks"
                            name='numberOfbooks'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.numberOfbooks}
                        />
                        {formik.errors.numberOfbooks && formik.touched.numberOfbooks && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">{formik.errors.numberOfbooks}</div>}
                    </div>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={inView && { opacity: 1, y: 0 }} transition={{ duration: 0.8, type: "spring", delay: 0.6 }}>
                        <label htmlFor="comments" className="block mb-2 text-sm font-medium text-end text-gray-900 dark:text-white">ملاحظات</label>
                        <Textarea
                            id="comments"
                            name='comments'
                            dir='rtl'
                            placeholder="لو عندك ملاحظات بخصوص الأوردر من فضلك اكتبها هنا"
                            rows={4}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.comments}
                        />
                        {formik.errors.comments && formik.touched.comments && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">{formik.errors.comments}</div>}
                    </motion.div>
                </div>
                <motion.button type="submit" className="text-white bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition" initial={{ opacity: 0, y: 10 }} animate={inView && { opacity: 1, y: 0 }} transition={{ duration: 0.8, type: "spring", delay: 0.6 }}>
                    اطلب الأن
                </motion.button>

            </form>
        </div>
    );
}
