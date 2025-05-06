import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import OurTeam from './pages/OurTeam';
import About from './pages/About';
import Contact from './pages/Contact';
import DonorRequest from './pages/DonorRequest';
import BloodInventory from './pages/BloodStock'
import Popper from 'popper.js';
import 'jquery'; import 'popper.js'; import 'bootstrap/dist/js/bootstrap.min.js';
import "./App.css";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/our-team' element={<OurTeam />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/blood-inventory' element={<BloodInventory />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/donor-request' element={<DonorRequest />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
