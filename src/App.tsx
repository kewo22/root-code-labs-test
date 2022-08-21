import { Routes, Route } from 'react-router-dom';

import Vehicles from './pages/vehicles/Vehicles';
import Vehicle from './pages/vehicle/Vehicle';
import Bid from './pages/Bid/Bid';

import './App.css';

function App() {
  return (

    <div className="wrapper">
      <Routes>
        <Route path='/' element={<Vehicles />} />
        <Route path='/vehicles' element={<Vehicles />} />
        <Route path="/vehicle/:vehicleId" element={<Vehicle />} />
        <Route path="/bid" element={<Bid />} />
      </Routes>
    </div>

  );
}

export default App;
