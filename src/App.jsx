import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Yes from "./pages/Yes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Yes" element={<Yes />}></Route>

      </Routes>
    </Router>
  );
}

export default App;