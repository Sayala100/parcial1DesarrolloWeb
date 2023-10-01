import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './login.css';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

function Login() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [emailValid, setEmailValid] = useState(true);

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormValues({ ...formValues, email });
    validateEmail(email);
  };

  const validateEmail = (email) => {
    const emailValidation = email.includes('@uniandes.edu.co') && email.length > 6;
    setEmailValid(emailValidation);
  };

  const handleFormSubmit = () => {
    if (formValues.email === '') {
      alert('Please enter an email address');
    }
    else if (emailValid) {
      // Email is valid, proceed with form submission
      // handlePost();
      navigate('/1/'+formValues.email);
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 border rounded">
      <div className="row border rounded ">
        <h2 className="mb-4"><FormattedMessage id="Access"/></h2>
        <h5 className="mb-4"><FormattedMessage id="Use your UniAlpes account"/></h5>
        <Form>
          <Form.Group className="mb-6" controlId="formBasicEmail">
            <Form.Label><FormattedMessage id="Email Adress"/></Form.Label>
            <Form.Control
              type="email"
              placeholder="Correo electrónico"
              onChange={handleEmailChange}
              value={formValues.email}
              style={{ borderColor: emailValid ? '' : 'red' }}
            />
            {emailValid ? (
              <Form.Text className="text-muted"></Form.Text>
            ) : (
              <Form.Text className="text-muted">
              <FormattedMessage id="P¨lease enter a valid email adress"/>
              </Form.Text>
            )}
          </Form.Group>
          <p className="mb-0"><FormattedMessage id="Forgot your email?"/></p>
          <div className="d-flex justify-content-between align-items-center mb-4">
          <p className="mb-0"><FormattedMessage id="Create account"/></p>
              <Button variant="primary" onClick={handleFormSubmit}>
              <FormattedMessage id="Next"/>
              </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
