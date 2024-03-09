import { useState } from "react";
import "./index.css";
import { Employee } from "./Employee";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("N/A");
  const [employees, setEmployees] = useState([
    { name: "Hamza", role: "Developer", img: "assets/person-1.jpg" },
    { name: "Osama", role: "Intern", img: "assets/person-2.jpg" },
    { name: "John", img: "assets/person-3.jpg" },
    { name: "Hamza", role: "Developer", img: "assets/person-1.jpg" },
    { name: "Osama", role: "Intern", img: "assets/person-2.jpg" },
    { name: "John", img: "assets/person-3.jpg" },
    { name: "Hamza", role: "Developer", img: "assets/person-1.jpg" },
    { name: "Osama", role: "Intern", img: "assets/person-2.jpg" },
    { name: "John", img: "assets/person-3.jpg" },
  ]);

  const showEmployees = true;

  return (
    <div className="App ">
      {showEmployees ? (
        <>
          <input type="text" onChange={(e) => setRole(e.target.value)} />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => (
              <Employee
                key={uuidv4()}
                name={employee.name}
                role={employee?.role || role}
                img={employee.img}
              />
            ))}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
