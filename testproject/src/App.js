// App.js
import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainHeader from './layout/MainHeader';
import Home from './pages/home/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import { ProtectedRoute } from './ProtectedRoutej';
import { Error404 } from './pages/error404/Error404';

function App() {


  return (
    <div>
      <Container>
        <Routes>
        
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login  />} />
          <Route  path='/'  element={<Navigate to="/home/todolist"/>} ></Route>
          <Route  path='/home'  element={<ProtectedRoute/>} >
          <Route path="todolist" element={<Home />} />

          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
