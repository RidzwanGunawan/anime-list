import React from "react";

const HeaderMenu = ({ title }) => {
  return (
    <>
      <div className="p-7 text-center text-2xl text-color-primary font-bold">
        <h3>{title}</h3>
      </div>
    </>
  );
};

export default HeaderMenu;
