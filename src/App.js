import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* can also use opening and closing tags like below */}
      {/* <Navbar></Navbar> */}

      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
