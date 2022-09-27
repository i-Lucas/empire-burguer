import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import "../assets/styles/reset.css";
import "../assets/styles/global.css";

import Main from "../pages/";
import NotFound from "../pages/notfound";

export default function App() {

    const [isOpen, setOpen] = React.useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main isOpen={isOpen} setOpen={setOpen} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
};