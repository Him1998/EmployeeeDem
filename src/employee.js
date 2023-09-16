import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeList() {
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState([]);
  const apiUrl = "https://sweede.app/DeliveryBoy/Get-Employee/";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setEmployeeData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleEditClick = (employeeId) => {
    navigate(`/edit/${employeeId}`)
    console.log(`Edit employee with ID ${employeeId}`);
  };

  const handleRemoveClick = (employeeId) => {
    console.log(`Remove employee with ID ${employeeId}`);
  };

  return (
    <div>
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Study</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.FirstName}</td>
              <td>{employee.LastName}</td>
              <td>{employee.DOB}</td>
              <td>{employee.Study}</td>
              <td>
                <div className="action-buttons">
                  <button onClick={() => handleEditClick(employee.id)}>Edit</button>
                  <button onClick={() => handleRemoveClick(employee.id)}>Remove</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
