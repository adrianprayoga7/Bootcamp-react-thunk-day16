import React from "react";
import ReactDOM  from "react-dom/client";
import {Provider} from "react-redux";
import {createStore} from "redux";

//import setiap class
import reducer from "./reducer";
import App from "./App";
import "./style.css";


let store = createStore(reducer);

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);


//proses rendering 
root.render(<Provider store={store}><App /></Provider>);