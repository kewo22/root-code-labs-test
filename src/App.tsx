import React from 'react';
import logo from './logo.svg';
import './App.css';
import Vehicles from './pages/vehicles/Vehicles';
import { Routes, Route } from 'react-router-dom';
import Vehicle from './pages/Vehicle';
import Bid from './pages/Bid/Bid';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Vehicles />} />
      <Route path='/vehicles' element={<Vehicles />} />
      <Route path="/vehicle/:vehicleId" element={<Vehicle />} />
      <Route path="/bid" element={<Bid />} />
    </Routes>

    // <Vehicle></Vehicle>
  );
}

export default App;
