import { React, useState } from "react";
import axios from "axios";

import getUser from "../scripts/getUserInfo";

async function authenticateUser(email, password) {
    try {
        const response = await axios.post(
            "http://localhost:80/api/authenticate",
            { email, password }
        );
        const token = response.data.token;
        // Зберегти токен в локальному сховищі
        localStorage.setItem("token", token);
        console.log(password);
        console.log(email);
    } catch (error) {
        console.error(error);
    }
}

const Login = ({ user, setUser }) => {
    // Ініціалізувати стани для адреси електронної пошти та паролю
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Обробник для входу
    const handleLogin = async () => {
        // Виклик функції authenticateUser з параметрами email та password
        await authenticateUser(email, password);
        // Очистити поля форми
        getUser([setUser]);
    };

    return (
        <div class="flex h-screen justify-center items-center">
            <form class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-lg font-medium mb-4">Sign in</h2>
                <div class="mb-4">
                    <label
                        class="block text-gray-700 font-medium mb-2"
                        for="email">
                        Email
                    </label>
                    <input
                        class="w-full border border-gray-400 p-2 rounded-lg"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div class="mb-4">
                    <label
                        class="block text-gray-700 font-medium mb-2"
                        for="password">
                        Password
                    </label>
                    <input
                        class="w-full border border-gray-400 p-2 rounded-lg"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div class="mb-4">
                    <button
                        class="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600"
                        type="button"
                        onClick={handleLogin}>
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
