import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import AddTaskPage from "./pages/AddTaskPage.tsx";
import HomePage from "./pages/HomePage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/add-task" Component={AddTaskPage}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
