import React from 'react';
import BookCard from './BookCard';


const BookList = () => {
const books = [
{ id: 1, title: 'Atomic Habits', author: 'James Clear' },
{ id: 2, title: 'The Alchemist', author: 'Paulo Coelho' },
{ id: 3, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki' }
];


return (
<div>
{books.map((book) => (
<BookCard key={book.id} book={book} />
))}
</div>
);
};


export default BookList;