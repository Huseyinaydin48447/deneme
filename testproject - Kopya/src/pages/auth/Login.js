import React from 'react'
import { Card, Form, Button} from 'react-bootstrap'
import MainHeader from '../../layout/MainHeader'

import { useState } from 'react';
const Login = () => {

    const [formData, setFormData] = useState({
        email1: '',
        psw1: '',
       
      });
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Form verilerini işleme al
        const { email1, psw1 } = formData;
        
        console.log('Email:', email1);
        console.log('Password:', psw1);
      };
    
      const handleChange = (event) => {
        const { name, value, } = event.target;
        setFormData({ ...formData, [name]: value });
      };
  return (

    <>
    <>
    </>
    <>
     <Card body title='LOGIN' >
        <h1>LOGIN</h1>
         <Form  style={{marginTop:'20px'}}  onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email1'  required onChange={handleChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='psw1'  required onChange={handleChange} />
      </Form.Group>
   
      <Button variant="primary"  disabled={formData.email1!==""&& formData.psw1!=="" ? false : true} type="submit">
        Submit
      </Button>
    </Form>
    </Card>
    </>
   </>
  )

}



export default Login