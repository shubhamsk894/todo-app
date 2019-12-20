import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles.css";
import "./utils/storage";
import "antd/dist/antd.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
