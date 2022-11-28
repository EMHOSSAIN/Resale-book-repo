import React from 'react';
import img1  from '../../../Picture/bookpic.png'
import img2  from '../../../Picture/img1.png'
import img3  from '../../../Picture/img3.png'

const Section = () => {
    return (
       <div className='mt-10' >
        <div className='text-center'>
        <h1 className='text-2xl'>Best <span className='text-5xl text-gray-600 '>Seller</span> Book</h1>
        <p>This is the most helpful and best seller book in our webside. <br/> This type of book are motivitional for every one.which help people a lot .</p>
        </div>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 shadow-xl '>
           <div className='ml-3'>
           <img className='h-80' src={img1} alt=''></img>
           </div>
           <div className='ml-8'>
           <img className='h-80' src={img2} alt=''></img>
           </div>
           <div className='ml-9'>
           <img className='h-80' src={img3} alt=''></img>
           </div>
        </div>
       </div>
    );
};

export default Section;