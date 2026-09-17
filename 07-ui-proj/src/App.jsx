import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjRTJnrr4Ui6vjQKajGMQywQJ_6yaskJqoCgOMdukJ5w&s=10",
      intro:
        "Kendall Jenner is a renowned model and media personality, celebrated for her distinctive style, confidence, global influence, and successful fashion career.",
      tag: "Satisfied",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowxa7twPPoaYatv85SzPCBemZFaBQlyYtDieJc_CQBw&s=10",
      intro:
        "Chico is a charismatic model known for his striking appearance, confident presence, unique fashion sense, and growing influence within the industry.",
      tag: "Oversatisfied",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdaM-vE7gGOq7q-rtHCgwYf9i4NTW7_lCxF4egqeELQ&s=10",
      intro:
        "Gigi Hadid is an internationally recognized model celebrated for her versatility, elegance, distinctive runway presence, and influential fashion collaborations worldwide.",
      tag: "Undersatisfied",
    },
  ];

  users.map(function (elem) {});
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
