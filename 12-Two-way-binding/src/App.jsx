import { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");

  const submitHandler = (elem) => {
    elem.preventDefault();
    console.log("form submitted by ", title);
    settitle("");
  };
  return (
    <div>
      <form
        onSubmit={(elem) => {
          submitHandler(elem);
        }}
      >
        <input
          onChange={(e) => {
            settitle(e.target.value);
          }}
          type="text"
          placeholder="Enter your name "
          value={title}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
