import './App.css';
import Home from './Components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Name from './Components/Name/Name';
import Categorie from './Components/Categorie/Categorie';
import DoctorInfo from './Components/DoctorInfo/DoctorInfo';
import Appointment from './Components/Appointment/Appointment';
function App() {
  return (
    <div>
      <Router>
          <nav className="navbar fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to={"/"} style={{ textDecoration: 'none' }}>
                      <a className="navbar-brand" style={{ textDecoration: 'none' }}> Doctor's Appointment</a>
                    </Link>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
      
        <Routes>
        <Route exact path="/" element={<Home />} /> 

        <Route path="/categorie/:catName" element={ <Categorie />} /> 

        <Route path="/:ctName/:username" element={ <DoctorInfo/>} />

        <Route path="/:ctName/:username/appointment" element={ <Appointment/>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
