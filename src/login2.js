import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';
import { useParams } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';


function Login2() {
  
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({name:"", password:""})
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const {email} = useParams();


  const handlePasswordChange = ((e) => {
    setFormValues({...formValues, password: e.target.value})
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const isPasswordValid = passwordRegex.test(e.target.value);
    setPasswordValid(isPasswordValid);

    if (!isPasswordValid) {
        setPasswordErrorMessage("Your password should be have numbers and letters and should be at least 9 char long")
      }
      else {
        setPasswordErrorMessage("")
      }
    });



  const handleFormSubmit = (() => {
    
    if (formValues.password === '') {
      alert('Please enter a password');
    }
    else if (passwordValid) {
      // Email is valid, proceed with form submission
      handlePost();
      navigate('/carros');
    } else {
      alert('Please a valid password');
    }
   
    });

    const [dataPost, setDataPOST] = useState("{}");
    const [dataGET, setDataGet] = useState("{}")
    const API_KEY = "a1908270"
    var id = 1;
    var exampleJSON = { "id": id, "email": {email}, "password": formValues.password}

    async function handlePost() {
      
      console.log(exampleJSON)
      id = id + 1;

      }
      
      
      
      


  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 border rounded">
      <div className="row border rounded ">
          <h2 className="mb-4">{email}</h2>
          <Form>
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control 
              type="password" 
              placeholder="Ingresa tu contraseña"
              onChange={handlePasswordChange} 
              value={formValues.password}
              style={{ borderColor: passwordValid ? '' : 'red'}} 

            />
            {passwordValid ? (
               <Form.Text className="text-muted"><FormattedMessage id="Your password should have numbers and at least 6 characters long"/></Form.Text>
              ) : (
                <Form.Text className="text-muted">{passwordErrorMessage}</Form.Text>
              )}

          </Form.Group>
          <div className="d-flex justify-content-between align-items-center mb-4">
          <p className="mb-4 text-align-left"><FormattedMessage id="Show password"/></p>
          <p></p>
          </div>
              <Button variant="primary" onClick={handleFormSubmit}>
              <FormattedMessage id="Next"/>
              </Button>
        </Form>
        </div>
      </div>
  );
}

export default Login2;