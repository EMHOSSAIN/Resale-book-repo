import React from 'react';
import img1 from '../../../../Components/Picture/img1.png'
import img2 from '../../../../Components/Picture/img2.png'
import img3 from '../../../../Components/Picture/img3.png'
import img4 from '../../../../Components/Picture/img4.png'
import img5 from '../../../../Components/Picture/img5.png'
import img6 from '../../../../Components/Picture/img6.png'
import img7 from '../../../../Components/Picture/img7.png'

const Banner = () => {
    return (
        <div>
            <span> <img src={img1} alt='' /> </span>
            <span> <img src={img2} alt='' /> </span>
            <span> <img src={img3} alt='' /> </span>
            <span> <img src={img4} alt='' /> </span>
            <span> <img src={img5} alt='' /> </span>
            <span> <img src={img6} alt='' /> </span>
            <span> <img src={img7} alt='' /> </span>
        </div>
    );
};

export default Banner;