import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import CourseList from "./components/CoursesList";

function App() {
    return (
        <>
            <div>
                <CourseList></CourseList>
            </div>
        </>
    );
}

export default App;
