import { useRef } from 'react';
import './Intro.scss';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
export default function Intro() {
    const Title = useRef();
    const Title2 = useRef();
    const Description = useRef();
    const Title3 = useRef();
    const Description2 = useRef();
    const Title4 = useRef();
    const Title5 = useRef();

    const InView = useInView(Title, { once: true })
    const InView2 = useInView(Title2, { once: true })
    const InView3 = useInView(Description, { once: true })
    const InView4 = useInView(Title3, { once: true })
    const InView5 = useInView(Description2, { once: true })
    const InView6 = useInView(Title4, { once: true })
    const InView7 = useInView(Title5, { once: true })

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
    return <div className='mt-6 Intro p-2'>
        <div className="offer">
            <h1>
                299ج بدلا من  <del>600ج</del> عرض لمدة 24 ساعة والشحن مجانا لاي مكان في مصر
            </h1>
            <br />
            <Link to={"/#order"} onClick={scrollToSection3}>
                <u>
                    <span> اطلب الان من هنا </span>
                </u>
            </Link>
        </div>
        <motion.h1 className='text-2xl text-center mt-5 font-bold leading-10'
            initial={{ opacity: 0 }} animate={InView && { opacity: 1 }} transition={{ type: "spring", duration: "1" }}
            ref={Title}>
            ليه مجموعة كتب ENGLISHIANO الكثر مبيعا في مصر والوطن العربي ؟
        </motion.h1>

        <motion.h1 className='text-2xl text-center mt-9' initial={{ opacity: 0, y: 10 }}
            animate={InView2 && { opacity: 1, y: 0 }} transition={{ type: "spring", duration: "1" }} ref={Title2}>
            محتويات كتاب إنجلشيانو
        </motion.h1>

        <motion.ul className="space-y-1 list-disc list-inside mt-3 mb-3 text-gray-600" initial={{ opacity: 0, y: 10 }}
            animate={InView3 && { opacity: 1, y: 0 }} transition={{ type: "spring", duration: "1" }} ref={Description}>

            <div className='flex'>
                <li>
                </li>
                <span>
                    أهم 120 محادثة في اللغة الإنجليزية و جمب كل محادثة QR كود للإستماع باللهجة الأمريكية (يعني هتذاكر الشرح و هتسمع المحادثة و في نفس الوقت شايفها قدامك و هتردد وراها بنفس اللهجة).
                </span>
            </div>

            <div className='flex'>
                <li>
                </li>
                <span>
                    أهم الكلمات المستخدمة في كل نواحي الحياة بالصور و جمبهم QR كود للنطق مع الترجمة.
                </span>
            </div>

            <div className="flex">
                <li>
                </li>
                <span>
                    أهم 1000 جملة في اللغة الإنجليزية و جمبهم QR كود للنطق مع الترجمة.

                </span>
            </div>

            <div className="flex">
                <li>
                </li>
                <span>
                    أهم 3000 كلمة في اللغة الإنجليزية مقسمة لأشهر الكلمات التي تبدأ بكل حرف من حروف اللغة و جمبهم QR كود للنطق مع الترجمة.

                </span>
            </div>

            <div className="flex">

                <li>
                </li>
                <span>
                    أهم 20 سؤال للإنترفيو (Interview) اللي تعتبر مطلب جماهيري و بتبقي مصدر قلق و خوف كبير قبل أي مقابلة شغل بإجاباتهم النموذجية و جمبهم QR كود بالنطق و الأكسنت مع الترجمة.

                </span>
            </div>

            <div className="flex">
                <li>
                </li>
                <span>
                    خطة المذاكرة و الوصول للطلاقة يوم بيوم كأن في مدرس بيوجهك و يقولك هتعمل كذا النهاردة و كذا بكرة.

                </span>
            </div>

            <div className="flex">
                <li>
                </li>
                <span>
                    جودة طباعة فاخرة شبيهة بالمجلات و تنسيقات و ألوان فوق الممتازة.
                </span>
            </div>

            <div className="flex">
                <li>
                </li>
                <span className='mb-7'>
                    الكتاب مناسب لكل الأعمار و المستويات و طلاب و خريجي الجامعات و جميع مراحل التعليم من الإبتدائي حتي الثانوي و أولياء الأمور.
                </span>
            </div>
        </motion.ul>

        <motion.h1 className='text-2xl text-center mt-7 mb-4' initial={{ opacity: 0, y: 10 }}
            animate={InView4 && { opacity: 1, y: 0 }} transition={{ type: "spring", duration: "1" }} ref={Title3}>
            بوكليت إنجلشيانو جرامر
        </motion.h1>

        <motion.ul className="space-y-1 list-disc list-inside mt-2 text-gray-600" ref={Description2}
            initial={{ opacity: 0, y: 10 }} animate={InView5 && { opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: "1", delay: 0.2 }} >
            <div className="flex">
                <li>

                </li>
                <span className='mb-7'>و اللي فيه هتتعلم أهم قواعد الجرامر في اللغة الإنجليزية بداية من إزاي تكون جملة و أجزاء الكلام و جميع الأزمنة و الروابط و الدروس اللي هتساعدك تخلي الكلام يتكون لوحده بشكل مرتب و منظم و كمان بعد كل درس هتلاقي تدريبات مهمة عليه بالإجابات.
                </span>
            </div>
        </motion.ul>

        <motion.h1 className='text-2xl text-center mt-7' ref={Title4} initial={{ opacity: 0, y: 10 }}
            animate={InView6 && { opacity: 1, y: 0 }} transition={{ type: "spring", duration: "1" }}>
            بوكليت إنجلشيانو تخصصات الإلكتروني (هدية pdf لكل طلاب و خريجي جميع الكليات و المعاهد)
        </motion.h1>

        <motion.ul className="space-y-1 list-disc list-inside mt-2" ref={Title5}
            initial={{ opacity: 0, y: 10 }} animate={InView7 && { opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: "1", delay: 0.2 }} >
            <div className="flex text-gray-600">
                <li>
                </li>
                <span>
                    و اللي فيه هتلاقي أهم المصطلحات المستخدمة لطلاب و خريجي 23 كلية (مع الترجمة) من جميع كليات الطب و الهندسة و الحاسبات و الصيدلة و العلوم و التجارة و الحقوق و الآداب و كلية الشرطة و الكلية الحربية و الكلية البحرية و الكلية الجوية و كل الكليات و المعاهد و الدبلومات.
                </span>
            </div>
        </motion.ul>


    </div>
}
