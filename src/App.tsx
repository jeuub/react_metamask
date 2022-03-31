import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyRoutes from "./routes";
import Header from "./components/Header";
import "./styles.css";

function App() {
  const renderRoutes = () =>
    MyRoutes.map((route, idx) => (
      <Route key={idx} path={route.path} element={route.component} />
    ));

  return (
    <BrowserRouter>
      <Header />
      <Routes>{renderRoutes()}</Routes>
    </BrowserRouter>
  );
}

export default App;
