import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate , Link } from 'react-router-dom';

const Login = ({ setLoggedInUser }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email1: '',
    psw1: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email1, psw1 } = formData;

    // if (email1 === "ali@gmail.com" && psw1 === "123") {
    //   navigate('/');
    //   setLoggedInUser(email1);
    //   localStorage.setItem('loggedInUser', JSON.stringify({email1:email1,psw1:psw1}))
    // } else {
    //   alert("Yanlış kullanıcı adı veya şifre");
    // }


    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && email1 === userData.email && psw1 === userData.psw) {
         setLoggedInUser(email1);
      navigate('/');
      window.location.reload();
      
   
    } else {
      alert("Yanliş kullanici adi veya şifre");
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
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='psw1' required onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br></br>
      <Form.Text className="text-muted">
        If you don't have an account, <Link to="/register"><b>sign up</b></Link>
      </Form.Text>

    </Form>
  );
};

export default Login;
