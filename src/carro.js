import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams, Link } from 'react-router-dom';
import './carros.css';
import { FormattedMessage } from 'react-intl';

function Carro() {
  const { modelo } = useParams();
  const [carrosData, setCarrosData] = useState([]);
  const [carroInfo, setCarroInfo] = useState(null);
  var [randomBoolean, setRandomBoolean] = useState(Math.random() < 0.5);


  useEffect(() => {
    // Define the Mockaroo API endpoint
    const mockarooUrl =
      'https://raw.githubusercontent.com/Sayala100/parcial1DesarrolloWeb/main/src/datos.json';
    // Fetch data from the Mockaroo API
    fetch(mockarooUrl)
      .then((response) => response.json())
      .then((data) => {
        setCarrosData(data);
        // Find the car with the matching model in the data
        const matchingCar = data.find((car) => car.carModel === modelo);
        if (matchingCar) {
          setCarroInfo(matchingCar);
        } else {
          // Handle case where no matching car is found
          console.error(`Car with model ${modelo} not found.`);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [modelo]);
  

  return (
    <div className="car-details-container">
      <div className="car-image">
        {/* Display your car image here */}
        <img src={carroInfo?.image} alt={carroInfo?.carModel} />
      </div>
      <div className="car-details">
        <h2>{carroInfo?.partName}</h2>
        <hr />
        <div className="car-maker-info">
          <h4><FormattedMessage id="Car Maker"/></h4>
          {randomBoolean ? (
              <input type="text" defaultValue={carroInfo?.carMaker} />
            ) : (
              <p>{carroInfo?.carMaker}</p>
            )}
        </div>
        <div className="car-maker-info">
          <h4><FormattedMessage id="Car Model"/></h4>
          {randomBoolean ? (
              <input type="text" defaultValue={carroInfo?.carModel} />
            ) : (
              <p>{carroInfo?.carModel}</p>
            )}
        </div>
        <div className="car-maker-info">
          <h4><FormattedMessage id="Car Year"/></h4>
          {randomBoolean ? (
              <input type="text" defaultValue={carroInfo?.carYear} />
            ) : (
              <p>{carroInfo?.carYear}</p>
            )}
        </div>
        <div className="car-maker-info">
          <h4><FormattedMessage id="Available online"/></h4>
          {randomBoolean ? (
              <input type="text" defaultValue={carroInfo?.available ? 'Yes' : 'No'} />
            ) : (
              <p>{carroInfo?.available ? 'Yes' : 'No'}</p>
            )}
        </div>
        <div className="car-maker-info">
          <h4><FormattedMessage id="Price"/></h4>
          {randomBoolean ? (
              <input type="text" defaultValue={carroInfo?.price} />
            ) : (
              <p>{carroInfo?.price}</p>
            )}
        </div>
        <div className="car-maker-info">
        <h4><FormattedMessage id="Description"/></h4>
          <p></p>
        </div>
        {randomBoolean ? (
              <input type="text" defaultValue={carroInfo?.description} />
            ) : (
              <p>{carroInfo?.description}</p>
            )}
      </div>

    </div>
  );
  }

export default Carro;
