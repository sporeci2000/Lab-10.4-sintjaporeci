import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogin() {
        login();
        navigate("/admin");
    }

    return (
        <div style={{ padding: "1rem" }}>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
}
