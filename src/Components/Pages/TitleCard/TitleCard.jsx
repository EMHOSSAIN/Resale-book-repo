import React from 'react';
import { Link } from 'react-router-dom';

const TitleCard = ({ category }) => {
    const { name, img } = category
    return (
        <div className='mt-10'>
           
            <div className="card card-compact h-80  shadow-xl">
                <figure><img src= {img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                     <div className="card-actions justify-end">
                       
                        <Link to={`category/${category.id}`}> <button className="btn btn-primary">More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitleCard;