import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';
import { Link } from "react-router-dom";
import Login2 from './login2';


function Login() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({name:"", password:""})
  const [emailValid, setEmailValid] = useState(true);
  

  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
    });

    


  const handleFormSubmit = (() => {
    
    const emailValidation = formValues.email.includes("@uniandes.edu.co");
    setEmailValid(emailValidation);
    var email = formValues.email;

    if (emailValidation) {
        handlePost();
        id = id + 1;
        //navigate('/1');

    

    }
    else {
        alert("Please enter a valid email address");
    }
    });

    const [dataPost, setDataPOST] = useState("{}");
    const [dataGET, setDataGet] = useState("{}")

    
    var id = 1;
    var rol = true;
    var exampleJSON = { "id": id, "email": formValues.name, "password": "", "rol": rol}

    async function handlePost() {
        id = id + 1;
        if (id%2) {
            rol = false;
        }
        else {
            rol = true;
        }
        console.log(exampleJSON);
      }
      
      
      
      


  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 border rounded">
      <div className="row border rounded ">
          <h2 className="mb-4">Acceder</h2>
          <h5 className="mb-4">Usa tu Cuenta de UniAlpes</h5>
          <Form>
          <Form.Group className="mb-6" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Correo electronico"
              onChange={handleEmailChange} 
              value={formValues.email}
              style = {{borderColor: emailValid ? "" : "red"}}
              />
            { emailValid ? (
              <Form.Text className="text-muted"></Form.Text>
            ) : (
              <Form.Text className="text-muted">Please enter a valid email address</Form.Text>
            )}
          </Form.Group>
          <p className="mb-4 text-align-left">¿Olvidaste el correo electronico?</p>
          <row className="mb-4">
          <p>Crear cuenta</p>
          <Link to={"/1"}> 
          <Button variant="primary" onClick={handleFormSubmit}>Siguiente</Button>
           </Link> 
          
          
          </row>
        </Form>
        </div>
      </div>
  );
}

export default Login;