import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCategoryCard from '../BookCategoryCard/BookCategoryCard';

const BookShow = () => {
    const books = useLoaderData()
    console.log(books)
    return (
        <div>
            <h1>Category : {books.length}</h1>

            {/* {
                books.map(book=> <BookCategoryCard
                key={book._id}
                book={book}
                ></BookCategoryCard>)
            } */}
           
        </div>
    );
};

export default BookShow;