import { useState } from "react";
import "./index.css";
import { Employee } from "./components/Employee";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import Header from "./components/Header";

function App() {
  const [role, setRole] = useState("N/A");
  const [employees, setEmployees] = useState([
    { id: 1, name: "Hamza", role: "Developer", img: "assets/person-1.jpg" },
    { id: 2, name: "Osama", role: "Intern", img: "assets/person-2.jpg" },
    { id: 3, name: "John", img: "assets/person-3.jpg" },
    { id: 4, name: "Hamza", role: "Developer", img: "assets/person-1.jpg" },
    { id: 5, name: "Osama", role: "Intern", img: "assets/person-2.jpg" },
    { id: 6, name: "John", img: "assets/person-3.jpg" },
    { id: 7, name: "Hamza", role: "Developer", img: "assets/person-1.jpg" },
    { id: 8, name: "Osama", role: "Intern", img: "assets/person-2.jpg" },
    { id: 9, name: "John", img: "assets/person-3.jpg" },
  ]);

  const updateEmployee = (id, newName, newRole) => {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  };

  const newEmployee = (name, role, img) => {
    const newEmployee = {
      id: uuidv4(),
      name,
      role,
      img,
    };
    setEmployees(...employees, newEmployee);
  };

  const showEmployees = true;

  return (
    <div className="App bg-gray-300 min-h-screen">
      <Header />
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center my-2">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={uuidv4()}
                  id={employee.id}
                  name={employee.name}
                  role={employee?.role || role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
