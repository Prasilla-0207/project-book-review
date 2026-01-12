import React, { useState } from 'react';


const BookCard = ({ book }) => {
const [rating, setRating] = useState(0);
const [review, setReview] = useState('');


return (
<div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px' }}>
<h3>{book.title}</h3>
<p><b>Author:</b> {book.author}</p>


<label>Rating: </label>
<select onChange={(e) => setRating(e.target.value)}>
<option value="">Select</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
</select>


<br /><br />


<textarea
placeholder="Write your review"
value={review}
onChange={(e) => setReview(e.target.value)}
/>


<p><b>Your Rating:</b> {rating}</p>
<p><b>Your Review:</b> {review}</p>
</div>
);
};


export default BookCard;