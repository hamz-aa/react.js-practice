function Home() {
  const handleClick = (event) => {
    console.log("Hello Bro");

    // we can get event object from the function called through onClick
    // without specifying it as a parameter in the onClick
    console.log(event);
  };

  const handleClickAgain = (name) => {
    console.log("Hello " + name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>

      {/* adding click events in jsx */}
      {/* need to pass the reference of the function not invoke it */}
      <button onClick={handleClick}>Click Me</button>

      {/* if we want to invoke a function we call it inside an anonymous function */}
      <button onClick={() => handleClickAgain("Hamza")}>Click Me Again</button>
    </div>
  );
}

export default Home;
