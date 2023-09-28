import React from 'react';

function Book({ book }) {
  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
      <p>ISBN: {book.isbn}</p>
      <p>Published: {book.published}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default Book;

import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Book from './Book'; // Import the Book component

function Books({ booksData }) {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleCardClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            {booksData.map((book) => (
              <div key={book.id} className="col-md-4 p-3">
                <Card onClick={() => handleCardClick(book)}>
                  <Card.Img variant="top" src={book.image} alt={book.title} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>Author: {book.author}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          {selectedBook && <Book book={selectedBook} />}
        </div>
      </div>
    </div>
  );
}

export default Books;
