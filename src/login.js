import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';


function Login() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({name:"", password:""})
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
    });

const handlePasswordChange = ((e) => {
    setFormValues({...formValues, password: e.target.value})
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{9,}$/;
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
    
    const emailValidation = formValues.email.includes("@uniandes.edu.co");
    setEmailValid(emailValidation);

    if (emailValidation) {
        handlePost();
        id = id + 1;
        navigate('/books');
    }
    else {
        alert("Please enter a valid email address");
    }
    });

    const [dataPost, setDataPOST] = useState("{}");
    const [dataGET, setDataGet] = useState("{}")
    const API_KEY = "a1908270"
    var id = 1;
    var exampleJSON = { "id": id, "name": formValues.name, "password": formValues.password}

    async function handlePost() {
        try {
          const response = await fetch("https://my.api.mockaroo.com/login.json?key=" + API_KEY + "&id=" + exampleJSON.id, {
            method: "POST",
            body: JSON.stringify(exampleJSON),
            headers: { "X-Requested-With": "XMLHttpRequest" }
          });
      
          if (response.ok) {
            const dataa = await response.json();
            console.log("POST request successful:", dataa);
            setDataPOST(JSON.stringify(dataa));
          } else {
            console.error("POST request failed with status:", response.status);
            // You can handle error cases here, such as showing an error message to the user.
          }
        } catch (error) {
          console.error("Error making POST request:", error);
          // Handle other errors, such as network issues.
        }
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
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            ) : (
              <Form.Text className="text-muted">Please enter a valid email address</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password"
              onChange={handlePasswordChange} 
              value={formValues.password}
              style={{ borderColor: passwordValid ? '' : 'red'}} 

            />
            {passwordValid ? (
               <Form.Text className="text-muted">Your password should be have numbers and letters and should be at least 9 char long</Form.Text>
              ) : (
                <Form.Text className="text-muted">{passwordErrorMessage}</Form.Text>
              )}

          </Form.Group>
          

          <Button variant="primary" onClick={handleFormSubmit}>
            Submit
          </Button>
        </Form>
        </div>
      </div>
  );
}

export default Login;