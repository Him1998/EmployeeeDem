import React from 'react';
import {  Route, Routes } from "react-router-dom";
import './App.css';
import EmployeeList from './employee';
import Add from './landingPage';
import EditEmployee from './edit';

function App() {
  return( 
  <div>
  <Routes>
    <Route path='/' element={<Add />} />
    <Route path='getemployee' element={<EmployeeList />}/>
    <Route path='/edit/:id' element={<EditEmployee />}/>
  </Routes>
  </div>
)
}

export default App;
