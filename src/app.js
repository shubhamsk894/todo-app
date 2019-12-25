import React, { useState, useEffect } from "react";
import Header from "./views/header";
import TaskList from "./views/task-list";
import { message } from "antd";
import { DEFAULT_LIST_ITEM } from "./constants";
import { BrowserRouter, Route } from "react-router-dom";
import BottomNav from "./views/bottom-nav";
import storage from "./utils/storage";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    storage.get("todolist").then(data => {
      setTaskList(data);
    });
  }, []);

  const headerProps = {
    placeholder: "What needs to be done ?",
    onChange: e => {
      setTask(e.target.value);
    },
    onPressAdd: e => {
      let newLst = [
        ...taskList,
        Object.assign({}, DEFAULT_LIST_ITEM, { name: task })
      ];
      setTaskList(newLst);
      storage.set("todolist", newLst);
      message.success(`'${task}' is added successfully!`);
      setTask("");
    },
    value: task
  };

  const TaskListProps = {
    list: taskList,

    deleteHandler: task => e => {
      let updatedList = taskList.filter(item => item !== task);
      setTaskList(updatedList);
      storage.set("todolist", updatedList);

      message.error(`'${task.name}' is deleted successfully!`);
    },

    markHandler: taskName => e => {
      let key = taskList.findIndex(({ name }) => name === taskName);
      let task = taskList[key];
      taskList[key] = {
        ...task,
        done: !task.done
      };
      let updatedList = [...taskList];
      setTaskList(updatedList);
      storage.set("todolist", updatedList);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header {...headerProps} />
        <Route
          path="/"
          exact
          component={() => <TaskList {...TaskListProps} />}
        />
        <Route
          path="/active"
          component={() => (
            <TaskList
              {...{
                ...TaskListProps,
                list: taskList.filter(({ done }) => !done)
              }}
            />
          )}
        />
        <Route
          path="/completed"
          component={() => (
            <TaskList
              {...{
                ...TaskListProps,
                list: taskList.filter(({ done }) => done)
              }}
            />
          )}
        />
        <BottomNav className="bottomnav" />
      </BrowserRouter>
    </div>
  );
};

export default App;

// notification.open({
//   message: "Success!",
//   description: `'${task}' is added successfully!`
// });
