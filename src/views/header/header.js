import React from "react";
import TextInput from "../../components/TextInput";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const Header = props => {
  const { placeholder, value, onChange, onPressAdd } = props;

  const handleKeyPress = event => event.key === "Enter" && onPressAdd(event);

  return (
    <div>
      <Row>
        <Col span={24}>
          <Title level={1} style={{ textAlign: "center", color: "#46b980" }}>
            todos
          </Title>
        </Col>
      </Row>
      <Row gutter={[2, 2]}>
        <Col span={8} offset={8}>
          <TextInput
            {...{ placeholder, onChange, onKeyPress: handleKeyPress, value }}
          />
        </Col>
      </Row>
    </div>
  );
};
export default Header;
