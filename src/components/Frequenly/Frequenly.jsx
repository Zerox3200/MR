import React from 'react'
import { Question } from '../Question/Question'
import './Frequenly.scss';

export default function Frequenly() {
    return <>
        <h1 className='text-2xl Freq_Title text-center mt-10'>الأسئله الشائعه</h1>

        <div className="flex items-center flex-col py-10">
            <Question Delay={0} desc={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore deserunt voluptatem 
            dolorum nesciunt illo ipsa consectetur enim eveniet omnis suscipit deleniti maiores fuga dolores autem, possimus 
            saepe? Aliquid, odit eligendi?`} number={1} title={"سؤال"} />
        </div>
    </>
}
