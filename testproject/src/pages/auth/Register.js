import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import secureLocalStorage from 'react-secure-storage';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    psw: '',
    psw2: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, psw, psw2 } = formData;

    secureLocalStorage.setItem('userData', JSON.stringify({ email, psw }));
    navigate('/login');

  };

  const handleChange = (event) => {
    const { name, value, } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <Card body title='REGISTER'>

        <h1>Register</h1>
        <Form style={{ marginTop: '20px' }} onSubmit={handleSubmit} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" required onChange={handleChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='psw' placeholder="Password" required onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Reenter Password</Form.Label>
            <Form.Control type="password" name='psw2' placeholder="Password" required onChange={handleChange} />
          </Form.Group>

          <Button variant="primary" disabled={formData.email !== "" && formData.psw !== "" && formData.psw2 === formData.psw ? false : true} type="submit">
            Submit
          </Button>
          <br></br>
          <Form.Text className="text-muted">
            <Link to="/login"><b>Login </b></Link> if you have an account
          </Form.Text>
        </Form>
      </Card>
    </>
  )
}

export default Register