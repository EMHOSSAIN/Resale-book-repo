import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Model from '../../Model/Model';
import BookCategoryCard from '../BookCategoryCard/BookCategoryCard';

const BookShow = () => {
    const books = useLoaderData()
    const [resaleBook, setResaleBook]=useState(null)
    console.log(books)
    return (
        <div className='grid row-auto gap-y-8 '>
            <h1>Category : {books.length}</h1>

            {
                books.map(book=> <BookCategoryCard
                key={book.id}
                book={book}
                setResaleBook={setResaleBook}
                ></BookCategoryCard>)
            }
          {
            resaleBook &&
            <Model
            resaleBook={resaleBook}
            setResaleBook={setResaleBook}
            ></Model>
          }
        </div>
    );
};

export default BookShow;