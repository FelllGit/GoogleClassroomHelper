import React from "react";
import { Link } from "react-router-dom";

import launchMinecraft from "./../scripts/launchMinecraft";

const NavigationBar = ({user, setUser}) => {
    const { ipcRenderer } = window.require("electron");

    const handleClose = () => {
        ipcRenderer.send("close-app");
    };

    const handlePlay = () => {
        launchMinecraft(user, setUser);
    }

    return (
        <div className="text-white font-medium flex flex-col justify-between h-full mx-2">
            <div>
                <button className="block w-full bg-buttons-normal hover:bg-gray-700 text-white py-2 px-4 rounded-lg my-2">
                    Головна
                </button>
                <button className="block w-full bg-buttons-normal hover:bg-gray-700 text-white py-2 px-4 rounded-lg my-2">
                    Налаштування
                </button>
                <hr className="my-2 w-full" />
                <button
                    className="block w-full bg-buttons-normal hover:bg-gray-700 text-white py-2 px-4 rounded-lg my-2"
                    onClick={handlePlay}>
                    Сервер 1
                </button>
                <button className="block w-full bg-buttons-normal hover:bg-gray-700 text-white py-2 px-4 rounded-lg my-2">
                    Сервер 2
                </button>
            </div>
            <button
                className="w-full bg-buttons-decline text-white py-2 px-4 rounded-lg my-2"
                onClick={handleClose}>
                Вийти
            </button>
        </div>
    );
};

export default NavigationBar;
