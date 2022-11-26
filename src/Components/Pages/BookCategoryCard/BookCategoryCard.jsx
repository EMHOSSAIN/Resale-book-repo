import React from 'react';

const BookCategoryCard = ({ book }) => {
    const { Name, Picture, loation, Resale_Price, Original_Price, Seller_name, Post_date, Book_condition, Year_of_use } = book
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-80 h-80 ml-4 rounded-sm' src={Picture} alt="Album" /></figure>
                <div className="card-body mt-8">
                    <h2 className="card-title"> Book Name : {Name} </h2>
                    <p> Location : {loation} </p>
                    <h2 className="card-title">Original Price : {Original_Price} </h2>
                    <h2 className="card-title"> Resale Price : {Resale_Price} </h2>
                    <h2 className="card-title"> Seller Name : {Seller_name} </h2>
                    <h2 className="card-title"> Post Date : {Post_date} </h2>
                    <h2 className="card-title">Book Quelity : {Book_condition} </h2>
                    <h2 className="card-title"> Year of Use : {Year_of_use} </h2>
                    
                    <div className="card-actions justify-end">
                    <label htmlFor="book modal" className="btn">Bye Now</label>
                        {/* <button htmlFor="my-modal-3" className="btn btn-primary">Bye Now</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCategoryCard;