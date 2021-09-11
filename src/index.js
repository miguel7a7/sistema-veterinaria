import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./sass/custom.scss";
import reportWebVitals from "./reportWebVitals";
import { AppVeterinaria } from "./AppVeterinaria";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
ReactDOM.render(
	<React.StrictMode>
		<AppVeterinaria />
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
