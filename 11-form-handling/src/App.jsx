import React from "react";

const App = () => {
  const submitHandler = (elem) => {
    elem.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <div>
      <form
        onClick={(elem) => {
          submitHandler(elem);
        }}
      >
        <input type="text" placeholder="Enter your name " />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
