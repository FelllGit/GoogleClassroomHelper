import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import getUser from "./scripts/getUserInfo";

import NavigationBar from "./components/navigation";

import Main from "./pages/main";
import Settings from "./pages/settings";
import TechnoServerPage from "./pages/Techno";

import Login from "./pages/login";

function App() {
    //localStorage.removeItem("token");
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUser([setUser]);
    }, []);
    return (
        <>
            {user ? (
                <BrowserRouter>
                    <div className="h-screen flex text-text">
                        <div className="bg-background-front h-full text-white font-medium flex flex-col justify-between h-full p-2">
                            <NavigationBar user={user} setUser={setUser}/>
                        </div>
                        <div className="bg-background-back flex w-full flex-col justify-between h-full p-5">
                                <Routes>
                                    <Route exact path="/" element={<Main />} />
                                    <Route path="/settings" element={<Settings />} />
                                    <Route path="/techno" element={<TechnoServerPage />} />
                                </Routes>
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
