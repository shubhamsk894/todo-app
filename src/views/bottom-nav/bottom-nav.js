import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Row, Col } from "antd";

const BottomNav = () => {
  let navs = [
    { name: "All", link: "/" },
    { name: "Active", link: "/active" },
    { name: "Completed", link: "/completed" }
  ];

  return (
    <span>
      {navs.map((button, key) => {
        return (
          <Button type="dashed" key={key}>
            <NavLink
              exact
              activeStyle={{
                fontWeight: "bold",
                color: "#46b980"
              }}
              to={button.link}
            >
              {button.name}
            </NavLink>
          </Button>
        );
      })}
    </span>
  );
};

export default BottomNav;
