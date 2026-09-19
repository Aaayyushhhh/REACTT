import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);
  function Increase() {
    setnum(num + 1);
  }
  function Decrease() {
    setnum(num - 1);
  }
  function Jump() {
    setnum(num + 5);
  }
  return (
    <div>
      <h1>{num}</h1>

      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Jump}>Jump by 5</button>
    </div>
  );
};

export default App;
