import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const AppHeader = () => {
  const menuItems = [
    {
      key: "1",
      label: <Link to="/">Home</Link>,
    },
    {
      key: "2",
      label: <Link to="/note/new">Add Note</Link>,
    },
  ];

  return (
    <>
      <div
        style={{ color: "white", fontSize: "24px", fontWeight: "bold" }}
        className="navText"
      >
        <Link to="/" style={{ color: "white" }}>
          Notes App
        </Link>
      </div>
      <Menu theme="dark" mode="horizontal" items={menuItems} />
    </>
  );
};

export default AppHeader;
