import React from "react";
import { Row, Col, Icon, List } from "antd";
import clsx from "clsx";
import { STRIKE } from "./constants";
import "./task-list.css";

const TaskList = ({
  list,
  deleteHandler = () => false,
  markHandler = () => false,
  done
}) => {
  return (
    <Row>
      <Col span={8} offset={8}>
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={list}
          renderItem={item => {
            console.log(item);
            return (
              <List.Item
                actions={[
                  <div className="delete">
                    <Icon
                      type="delete"
                      theme="outlined"
                      onClick={deleteHandler(item)}
                    />
                  </div>
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <div className="check">
                      <Icon type="check" onClick={markHandler(item.name)} />
                    </div>
                  }
                  title={
                    <div className={clsx({ [STRIKE]: item.done })}>
                      {item.name}
                    </div>
                  }
                />
              </List.Item>
            );
          }}
        />
      </Col>
    </Row>
  );
};

export default TaskList;
