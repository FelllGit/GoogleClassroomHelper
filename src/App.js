import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import getUser from "./scripts/getUserInfo";

import NavigationBar from "./components/navigation";

import Main from "./pages/main";

import Login from "./pages/login";

function App() {
    localStorage.removeItem("token");
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUser([setUser]);
    }, []);
    return (
        <>
            {user ? (
                <BrowserRouter>
                    <div className="h-screen flex">
                        <div className="bg-gray-800 h-full flex-col">
                            <NavigationBar user={user} setUser={setUser}/>
                        </div>
                        <div className="bg-gray-600 flex-1">
                            <div>
                                <Routes>
                                    <Route exact path="/" element={<Main />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            ) : (
                <Login user={user} setUser={setUser} />
            )}
        </>
    );
}

export default App;
