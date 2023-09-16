import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Add() {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    FirstName: '',
    LastName: '',
    DOB: '',
    Study: '',
    StartDate: '',
    EndDate: '',
    CurrentSalary: '',
    Description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const apiUrl = "https://sweede.app/DeliveryBoy/Add-Employee/";
  
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "FirstName": userData.FirstName,
        "LastName": userData.LastName,
        "DOB": userData.DOB,
        "Study": userData.Study,
        "StartDate": userData.StartDate,
        "EndDate": userData.EndDate,
        "CurrentSalary": userData.CurrentSalary,
        "Description": userData.Description
    }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response data as JSON
      })
      .then((data) => {
        console.log("Response data:", data);
        navigate('/getemployee')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="App">
      <h1>Employee Registration Form</h1>
      <form>
        <label>
          First Name*
          <input
            type="text"
            name="FirstName"
            value={userData.FirstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name*
          <input
            type="text"
            name="LastName"
            value={userData.LastName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Date of Birth:
          <input
            type="date"
            name="DOB"
            value={userData.DOB}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Study:
          <input
            type="text"
            name="Study"
            value={userData.Study}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Start Date:
          <input
            type="date"
            name="StartDate"
            value={userData.StartDate}
            onChange={handleInputChange}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="EndDate"
            value={userData.EndDate}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Current Salary:
          <input
            type="number"
            name="CurrentSalary"
            value={userData.CurrentSalary}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label />
          Description:
          <textarea
            name="Description"
            value={userData.Description}
            onChange={handleInputChange}></textarea>
            <br/>
          <button  onClick={()=>{window.location.reload()}}>Cancel</button>
          <button onClick={handleSubmit}>Save</button>
        </form>
    </div>
  );
}

export default Add;
