import { React, useState, useEffect } from "react";

const TechnoServerPage = () => {
    const [progress, setProgress] = useState(100);
    useEffect(() => {
        document.title = 'Minecraft Revolution | Techno';
      }, []);
    return (
        <>
            <div>
                <h1 className="text-center text-3xl font-medium mb-2">
                    Techno 1.17
                </h1>
                <p className="text-center mb-2">
                    Ласкаво просимо до нашого технологічного Minecraft сервер!
                    Тут ви знайдете безліч цікавих та унікальних модів, які
                    дозволять вам досліджувати світ гри на новому рівні.
                    Відкрийте для себе потужність нових машин та технологій,
                    досліджуйте нові біоми та створюйте неймовірні конструкції.
                    Приєднуйтесь до нашої команди та відкрийте для себе всі
                    можливості цього світу!
                </p>
                <div className="flex text-center">
                    <div className="w-1/2">
                        <h2 className="text-lg font-medium mb-2">Main Mods</h2>
                        <ul>
                            <li>Mod 1</li>
                            <li>Mod 2</li>
                            <li>Mod 3</li>
                        </ul>
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-lg font-medium mb-2">
                            Server Plugins
                        </h2>
                        <ul>
                            <li>Plugin 1</li>
                            <li>Plugin 2</li>
                            <li>Plugin 3</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container grid grid-cols-6 gap-6 place-items-center">
                <div className="col-span-5 w-full">
                    <p className="text-xs text-gray-600 ml-2 mb-1">
                        Progress loading
                    </p>
                    <div className="bg-gray-300 h-4 rounded-full items-center justify-center align-middle">
                        <div
                            className="max-w-full bg-buttons-normal h-4 rounded-full transition-all ease-in-out duration-200"
                            style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
                <button
                    className="bg-buttons-normal float-right hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full mt-4 col-span-1"
                    onClick={() => setProgress(progress + 10)}>
                    Download
                </button>
            </div>
        </>
    );
};

export default TechnoServerPage;
