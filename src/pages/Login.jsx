import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


//Login component allows user to log in and redirects to admin page after login
export default function Login() {

    //Destructure login function from AuthContext
    const { login } = useContext(AuthContext);

    //Get navigate function to redirect user after login
    const navigate = useNavigate();

    function handleLogin() {
        login(); //Update auth state to logged in
        navigate("/admin"); //Redirect to protected admin page
    }

    return (
        <div style={{ padding: "1rem" }}>
            <h1>Welcome to the Login Page</h1>
            <button onClick={handleLogin}>Log In</button>
        </div>
    );
}
