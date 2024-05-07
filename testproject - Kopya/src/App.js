import logo from './logo.svg';
import './App.css';
import Login from './pages/auth/Login';
import MaınLayout from './layout/MaınLayout';
import Register from './pages/auth/Register';
import Home from './pages/home/Home';
import { Route, Routes } from "react-router-dom";

import { Container } from 'react-bootstrap';
import MainHeader from './layout/MainHeader';

function App() {
  return (
    // <MaınLayout>
    //   <Home/>

    //   <Login/>
    //   <Register/>
    // </MaınLayout>

    <div>
      <Container>
        <MainHeader></MainHeader>
         <Routes>
         <Route path="/" exact element={<Home/>}/>
         <Route path="/Register" exact element={<Register/>}/>
         <Route path="/login" exact element={<Login/>}/>
         </Routes>
      </Container>
      
    </div>
  );
}

export default App;
