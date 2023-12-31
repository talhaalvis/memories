
import { Container, } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';


function App() {

  return (
    <BrowserRouter>

    <Container maxWidth='lg'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/auth' element={<Auth/>}></Route>
      </Routes>
      
      

    </Container>
    </BrowserRouter>

  );
}

export default App;
