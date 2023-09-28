import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function Books() {
  const [booksData, setBooksData] = useState([]);
  const API_KEY = 'a1908270'; // Replace with your Mockaroo API key

  useEffect(() => {
    // Define the Mockaroo API endpoint
    const mockarooUrl = 'https://my.api.mockaroo.com/book.json?key='+API_KEY;

    // Fetch data from the Mockaroo API
    fetch(mockarooUrl)
      .then((response) => response.json())
      .then((data) => {
        setBooksData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 border rounded">
      <div className="row">
        {booksData.map((book) => (
          <div key={book.id} className="col-md-4 p-3">
            <Card>
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
  );
}

export default Books;
