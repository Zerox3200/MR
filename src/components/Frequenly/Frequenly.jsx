import React from 'react'
import { Question } from '../Question/Question'
import './Frequenly.scss';
import { data } from '../../questionsPayload';
export default function Frequenly() {
    return <>
        <h1 className='text-2xl Freq_Title text-center mt-16'>الأسئله الشائعه</h1>
        {data.map((ele) => {
            return <div key={ele.id} className="flex items-center flex-col py-3 " id='question'>
                <Question Delay={0} desc={`${ele.desc}`} desc1={`${ele.desc1}`} desc2={`${ele.desc2}`} desc3={`${ele.desc3}`} number={`${ele.id}`} title={`${ele.Question}`} />
            </div>
        })}

    </>
}
