import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Cnpgen from './pages/Cnpgen';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cnpgen' element={<Cnpgen/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes> 
    </Router>
      
    </>
  );
}

export default App;
