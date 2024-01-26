import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import AddTaskPage from "./pages/AddTaskPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import EditTaskPage from "./pages/EditTaskPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/add-task" Component={AddTaskPage}></Route>
        <Route path="/edit-task" Component={EditTaskPage}></Route>
        <Route path="*" Component={NotFoundPage}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
