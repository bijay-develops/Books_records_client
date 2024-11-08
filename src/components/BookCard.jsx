/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = ({book}) => {

  return (
    <Link to={`/show-book/${book._id}`} className='card-container-link'>
    <div className='card-container'>

      <img className='book-image'
        src='https://images.pexels.com/photos/17492047/pexels-photo-17492047/free-photo-of-bible-on-a-lectern.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='Books'
        height={200}
      />
      <div className='desc'>
        <h2>
          {book.title}
          {/* <Link to={`/show-book/${book._id}`}>{book.title}</Link> */}
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      </div>
    </div>
    </Link>
  );
};

export default BookCard;