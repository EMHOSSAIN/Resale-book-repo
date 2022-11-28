import React, { useEffect, useState } from 'react';
import TitleCard from '../TitleCard/TitleCard';

const CategoryTitle = () => {
    const [categories, setCategory] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <>
            <div className='text-center mt-10'>
                <h1 className='text-2xl text-black'>All Book Category</h1>
                <p className='text-xl'>There you will get a lot of information of books <br/> But before getting you have to click <span className='text-5xl text-orange-600'>MORE</span> blow in book card </p>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
                {
                    categories.map(category => <TitleCard
                        key={category.id}
                        category={category}
                    ></TitleCard>)
                    //  <Link to={`category/${category.id}`}></Link>
                }
            </div>
        </>
    );
};

export default CategoryTitle;