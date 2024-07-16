import React from 'react'
import './Loading.scss'
import LoadingImage from '../../Assets/1481.gif';

export default function Loading() {
    return <div className='Loading'>
        <div className="image-loader">
            <img src={LoadingImage} alt='Loader' width={'100px'} />
        </div>
    </div>
}
