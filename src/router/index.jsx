import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import "../assets/styles/reset.css";
import "../assets/styles/global.css";

import Home from "../pages/home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
};

function NotFound() {
    return <h1>NotFound</h1>
};