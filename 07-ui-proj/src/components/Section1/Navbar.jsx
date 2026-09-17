import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6 px-16">
      <h4 className="bg-black text-white uppercase px-12 py-3 rounded-full ">
        Target Audience
      </h4>
      <button className="bg-gray-200 uppercase px-12 py-3 rounded-full text-sm tracking-widest">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
