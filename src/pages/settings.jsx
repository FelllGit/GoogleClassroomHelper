import { React, useEffect } from "react";

const Settings = ({ pc }) => {
    useEffect(() => {
        document.title = "Minecraft Revolution | Settings";
    }, []);
    return (
        <>
            <div>
                <p>Operating System: {pc.os}</p>
                <p>Processor: {pc.cpu}</p>
                <p>Processor Architecture: {pc.architecture}</p>
                <p>Total Memory: {pc.memory}</p>
            </div>
        </>
    );
};

export default Settings;
