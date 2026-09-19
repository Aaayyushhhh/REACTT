import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState({ user: "aayush", age: 12 });

  const btnClicked = () => {
    const newNum = [...num]; //another short method  setnum((func) => ({ ...func, age: 50 }));

    newNum.push(99);
    setnum(newNum);
  };

  return (
    <div>
      <h1>
        {num.user}
        {num.age}
      </h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  );
};

export default App;
const newNum = [...num];
newNum.push(99);
setnum(newNum);
