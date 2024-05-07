import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { Container } from 'react-bootstrap';
import MainHeader from './layout/MainHeader';
import Home from './pages/home/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <div>
      <Container>
        <MainHeader loggedInUser={loggedInUser} />
         <Routes>
         <Route path="/" exact element={<Home/>}/>
         <Route path="/Register" exact element={<Register/>}/>
         <Route path="/login" exact element={<Login setLoggedInUser={setLoggedInUser} />} />
         </Routes>
      </Container>
      
    </div>
  );
}

export default App;
