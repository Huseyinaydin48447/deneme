// App.js
import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MainHeader from './layout/MainHeader';
import Home from './pages/home/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import { bos } from './pages/auth/bos';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // localStorage'dan kullanıcı bilgilerini al
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      setLoggedInUser(userData.email);
    }
  }, []);

  return (
    <div>
      <Container>
        <Routes>
          {loggedInUser ? (
            <>
              <Route path="/" element={
                  <React.Fragment>
                    <MainHeader setLoggedInUser={setLoggedInUser} />
                    <Home />
                  </React.Fragment>
                }
              />
            </>

          ) : (<Route path="/" element={<Login setLoggedInUser={setLoggedInUser} />} />)}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
