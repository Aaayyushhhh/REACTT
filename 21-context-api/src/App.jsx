import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {
  const [theme, settheme] = useState("light");
  return (
    <div>
      <Navbar theme={theme}>
        <h2>This is the navbar</h2>. {/*This is children as a props passing */}
        <h3>This is 12333</h3>
      </Navbar>
    </div>
  );
};

export default App;
