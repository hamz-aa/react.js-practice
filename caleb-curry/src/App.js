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
          <div className="flex flex-wrap justify-center">
            <Employee name="Hamza" role="Intern" img={"assets/person-1.jpg"} />
            <Employee name="Osama" role={role} img={"assets/person-2.jpg"} />
            <Employee name="John" img={"assets/person-3.jpg"} />
            <Employee name="Hamza" role="Intern" img={"assets/person-1.jpg"} />
            <Employee name="Osama" role={role} img={"assets/person-2.jpg"} />
            <Employee name="John" img={"assets/person-3.jpg"} />
            <Employee name="Hamza" role="Intern" img={"assets/person-1.jpg"} />
            <Employee name="Osama" role={role} img={"assets/person-2.jpg"} />
            <Employee name="John" img={"assets/person-3.jpg"} />
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
