import React from 'react';
import { useContext } from 'react';
import _ from 'lodash';
import Book from './Book';
import BooksContext from '../context/BooksContext';
import Img from '../images/hero.png';

const BooksList = () => {
    const { books, setBooks } = useContext(BooksContext);
  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
                  <img src={Img} alt="hero"  className="hero" />

      </div>
    </React.Fragment>
  );
};

export default BooksList;