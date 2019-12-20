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
    <Row>
      <Col span={8} offset={8}>
        {navs.map((button, key) => {
          return (
            <Button type="default" key={key}>
              <NavLink
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "dodgerblue"
                }}
                to={button.link}
              >
                {button.name}
              </NavLink>
            </Button>
          );
        })}
      </Col>
    </Row>
  );
};

export default BottomNav;
