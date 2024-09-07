import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login1, Signup1, Activation1, Home1 } from "./Routes.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Market from "./redux/market.js";
import { loadSeller, loadUser } from "./redux/actions/user";

const App = () => {
  useEffect(() => {
    Market.dispatch(loadUser());
    Market.dispatch(loadSeller());
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/login" element={<Login1 />} />
        <Route path="/signup" element={<Signup1 />} />
        <Route path="/activation/:activation_token" element={<Activation1 />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </BrowserRouter>
  );
};

export default App;
