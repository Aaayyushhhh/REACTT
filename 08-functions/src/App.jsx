import React from "react";

const App = () => {
  const pageScroll = (elem) => {
    console.log("page speed", elem);
  };
  return (
    <div>
      <div
        onWheel={(elem) => {
          pageScroll(elem.deltaY);
        }}
      >
        <div className="page1"></div>
        <div className="page2"></div>
        <div className="page3"></div>
      </div>
    </div>
  );
};

export default App;
