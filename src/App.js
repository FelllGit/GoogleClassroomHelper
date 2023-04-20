import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import CourseList from "./components/CoursesList";
import Header from "./components/Header";
import "./index.css";

import json from "./configs/conf.json";

function App() {
    const [email, setEmail] = useState(json.email);

    useEffect(() => {
        const fs = window.require("fs");
        const path = window.require("path");

        const filePath = path.join(process.cwd(), "src", "configs", "conf.json");

        const onChange = () => {
            fs.readFile(filePath, "utf-8", (err, data) => {
                if (err) throw err;

                const json = JSON.parse(data);
                setEmail(json.email);
            });
        };

        const watcher = fs.watch(filePath, (event, filename) => {
            if (filename) {
                console.log(`${filename} changed`);
                onChange();
            }
        });

        return () => watcher.close();
    }, []);

    return (
        <>
            <div>
            <Header email={email}></Header>

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<CourseList />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
