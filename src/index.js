import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import { AppProvider } from "./context";

import Login from "./Components/Login";
import BooksList from "./Components/BooksList";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <Container fixed>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="books" element={<BooksList />} />
        </Routes>
      </BrowserRouter>
    </Container>
  </AppProvider>
);
