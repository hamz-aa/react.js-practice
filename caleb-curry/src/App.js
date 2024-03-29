import Header from "./components/Header";
import "./index.css";
import Employees from "./pages/Employees";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Employees />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
