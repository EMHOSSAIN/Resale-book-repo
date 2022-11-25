import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TitleCard from '../TitleCard/TitleCard';

const CategoryTitle = () => {
    const [categories,setCategory]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=> res.json())
        .then(data=> setCategory(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
            {
                categories.map(category=> <TitleCard
                key={category.id}
                category={category}
                ></TitleCard>  )
                //  <Link to={`category/${category.id}`}></Link>
            }
        </div>
    );
};

export default CategoryTitle;