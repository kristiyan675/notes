import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const AppHeader = () => {
  const location = useLocation();
  const [current, setCurrent] = useState();

  useEffect(() => {
    if (location.pathname === "/") {
      setCurrent("1");
    } else if (location.pathname !== "/note/new") {
      setCurrent(null);
    }
  }, [location.pathname]);

  function handleClick(e) {
    setCurrent(e.key);
  }
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
        onClick={(e) => {
          if (current !== "1") {
            handleClick(e);
          }
        }}
      >
        <Link to="/" style={{ color: "white" }}>
          Notes App
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        items={menuItems}
        selectedKeys={[current]}
        onClick={handleClick}
      />
    </>
  );
};

export default AppHeader;
