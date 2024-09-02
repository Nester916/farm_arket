import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Signup, Activation } from "./Routes.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import {server} from "./server";


const App = () => {
  useEffect(() => {
    axios.get(`${server}/user/getuser`,{withCredentials:true}).then((res) => {
      toast.success(res.data.message);
    }).catch((err) => {
      toast.error(err.response.data.message);
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/activation/:activation_token" element={<Activation />} />
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
