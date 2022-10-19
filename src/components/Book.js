import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import '../styles.scss';

const Book = ({
  id,
  bookname,
  author,
  price,
  quantity,
  date,
  handleRemoveBook
}) => { const history =useHistory();
  return (
    <div  style={{ width: '18rem' }} className="main-div">
      <div className='card-body'>
        <div className="card-header">{bookname}</div>
        <div className="card-body">
          <div>Author: {author}</div>
          <div>Quantity: {quantity} </div>
          <div>Price: {price} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <div className='book-buttons'>
        <Button color="secondary" variant="outlined" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button color="error" variant="outlined" onClick={() => handleRemoveBook(id)}>
          Delete
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Book;