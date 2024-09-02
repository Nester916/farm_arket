import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import Market from "./redux/market";

ReactDOM.render(
  <Provider store={Market}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();