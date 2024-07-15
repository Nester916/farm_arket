import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Login,
  Signup,
  Activation,
} from "./Routes.js";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/activation/:activation_token" element={<Activation />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App