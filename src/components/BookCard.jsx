/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = ({book}) => {

  return (
    <div className='card-container'>
      <img
        src='https://images.pexels.com/photos/17492047/pexels-photo-17492047/free-photo-of-bible-on-a-lectern.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='Books'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-book/${book._id}`}>{book.title}</Link>
        </h2>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default BookCard;