import { useState } from "react";
import "./index.css";
import { Employee } from "./Employee";

function App() {
  const [role, setRole] = useState("Dev");
  const showEmployees = true;

  return (
    <div className="App ">
      {showEmployees ? (
        <>
          <input type="text" onChange={(e) => setRole(e.target.value)} />
          <div className="flex flex-wrap">
            <Employee name="Hamza" role="Intern" />
            <Employee name="Osama" role={role} />
            <Employee name="John" />
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
