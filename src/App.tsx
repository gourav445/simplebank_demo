import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;
