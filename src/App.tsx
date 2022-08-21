import React from 'react';
import logo from './logo.svg';
import './App.css';
import Vehicles from './pages/vehicles/Vehicles';
import { Routes, Route } from 'react-router-dom';
import Vehicle from './pages/Vehicle';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Vehicles />} />
      <Route path='/vehicles' element={<Vehicles />} />
      <Route path="/vehicle/:vehicleId" element={<Vehicle />} />
    </Routes>

    // <Vehicle></Vehicle>
  );
}

export default App;
