import React from "react";
import ReactDOM  from "react-dom/client";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";


//import setiap class atau file
import reducer from "./reducer/reducer.js";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));

//untuk membuat penyimpanan baru 
const store = createStore(reducer, applyMiddleware(thunk));

//proses rendering 
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);




