import React from "react";

const runConnectScript = (header) => {
    if (window && window.process && window.process.type) {
        const { ipcRenderer } = window.require("electron");
        ipcRenderer.send("run-connect-script");
    } else {
        console.log("Not running in an Electron environment.");
    }
};

const Header = ({email}) => {
    return (
        <header className="bg-blue-500 text-white py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex space-x-4">
                    <button className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 px-4 py-2 rounded transition duration-150 ease-in-out">
                        Курси
                    </button>
                    <button className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 px-4 py-2 rounded transition duration-150 ease-in-out">
                        Налаштування
                    </button>
                </div>
                <div className="text-white font-semibold">
                    <button
                        className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 px-4 py-2 rounded transition duration-150 ease-in-out"
                        onClick={runConnectScript}>
                        {email}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
