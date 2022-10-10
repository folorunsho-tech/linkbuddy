import React from "react";

const UserLink = () => {
  return (
    <div className="order-2 p-3 bg-gray-800 flex justify-between w-full">
      <span className="gap-1 flex items-center text-sm">
        <b>My Linkbuddy:</b>
        <a className="text-purple-400 underline" href="#">
          https://linktr.ee/tacheyon
        </a>
      </span>
      <button>Share</button>
    </div>
  );
};

export default UserLink;
