import React from "react";

const Sidebar = () => {
  return (
    <div className=" p-3 bg-gray-800 flex  justify-between md:flex-col md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-3">
      <h2>lb</h2>
      <div className="flex gap-3 md:flex-col">
        <p>icon</p>
        <button>menu</button>
      </div>
    </div>
  );
};

export default Sidebar;
