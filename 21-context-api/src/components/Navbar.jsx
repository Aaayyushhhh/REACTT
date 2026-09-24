import React from "react";
import Nav2 from "./Nav2";

// const Navbar = (props) => {
//   return (
//     <div className="nav">.    without destructing props
//       <h2>Fuckerr</h2>
//       {props.children}
//       <Nav2 theme={props.theme} />
//     </div>
//   );
// };

const Navbar = ({ children, theme }) => {
  console.log(children);
  return (
    <div className="nav">
      <h2>Fuckerr</h2>

      <Nav2 theme={theme} />
    </div>
  );
};
export default Navbar;
