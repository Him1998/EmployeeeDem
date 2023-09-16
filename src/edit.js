import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditEmployee() {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState({
    FirstName: '',
    LastName: '',
    DOB: '',
    Study: '',
    StartDate: '',
    EndDate: '',
    CurrentSalary: '',
    Description: '',
  });
  const apiUrl = `https://sweede.app/DeliveryBoy/update-Employee/${id}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setEmployeeData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [apiUrl]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Employee updated:", data);
      })
      .catch((error) => {
        console.error("Error updating employee:", error);
      });
  };

  return (
    <div className="EditEmployee">
      <h1>Edit Employee</h1>
      <form>
        <button onClick={() => window.location.reload()}>Cancel</button>
        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}

export default EditEmployee;
