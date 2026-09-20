import React, { useState } from "react";

const App = () => {
  const [Title, setTitle] = useState("");
  const [Detail, setDetail] = useState("");
  const [task, setTask] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ Title, Detail });
    setTask(copyTask);

    setTitle("");
    setDetail("");
  };

  return (
    <div className="h-screen bg-black text-white lg:flex">
      <form
        onSubmit={(e) => {
          SubmitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        {/* pehla input for the heading*/}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full  font-medium py-2 border-2  outline-none rounded"
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/* Detailed wala input*/}
        <textarea
          type="text"
          placeholder="Write Details"
          className="px-5  w-full  font-medium h-32 py-2 flex items-start flex-row  outline-none border-2 rounded"
          value={Detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}
        />
        <button className="bg-white  font-medium w-full text-black px-5 py-2  outline-none rounded">
          Add notes
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Yours notes</h1>
        <div className="flex  flex-wrap gap-5 mt-5 h-full overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-52 w-40 rounded text-black bg-white p-4"
              >
                <h3 className="leading-tight text-xl font-bold">
                  {elem.Title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
