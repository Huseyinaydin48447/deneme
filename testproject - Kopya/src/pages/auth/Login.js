import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email1: '',
    psw1: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email1, psw1 } = formData;
    
    // Kullanıcı adı ve şifre kontrolü
    if (email1 === "ali@gmail.com" && psw1 === "123") {
      navigate('/');
    } else {
      alert("Yanlış kullanıcı adı veya şifre");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Form style={{ marginTop: '20px' }} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email1' required onChange={handleChange} />
        <Form.Text className="text-muted">
        ali@gmail.com
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        
        <Form.Control type="password" placeholder="Password" name='psw1' required onChange={handleChange} />
     <Form.Text className="text-muted">
        123
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
