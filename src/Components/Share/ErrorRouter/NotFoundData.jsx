import React from 'react';
import'./NotFoundData.css'
import img from '../../Picture/404.png'

const NotFoundData = () => {
    return (
        <div className='w-10/12 h-full'>
           <img src={img} alt=''></img>
        </div>
    );
};

export default NotFoundData;