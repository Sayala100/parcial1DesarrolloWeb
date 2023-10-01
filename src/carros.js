import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

function Carros() {
  const [carrosData, setCarrosData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Define the Mockaroo API endpoint
    const mockarooUrl = 'https://raw.githubusercontent.com/Sayala100/parcial1DesarrolloWeb/main/src/datos.json';
    // Fetch data from the Mockaroo API
    fetch(mockarooUrl)
      .then((response) => response.json())
      .then((data) => {
        setCarrosData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

 


  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 border rounded">
      <div className="row">
        {carrosData.map((carro) => (
          <div key={carro.id} className="col-md-4 p-3">
          <Link to={"/carros/" + carro.carModel}>
            <Card>
              <Card.Img variant="top" src={carro.image} alt={carro.partName} />
              <Card.Body>
                <Card.Title>{carro.partName}</Card.Title>
                
                <Card.Text>{carro.carModel}</Card.Text>
                
                <Card.Text>{carro.carMaker}</Card.Text>
                <Card.Text>{carro.price}  -  {carro.carYear}</Card.Text>
              </Card.Body>
            </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

 export default Carros;

