import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


//Navbar component displays navigation links 
export default function Navbar() {
    //Destructure isAuthenticated and logout function from AuthContext
    const { isAuthenticated, logout } = useContext(AuthContext);

    return (
        <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
            <Link to="/blog" style={{ marginRight: "1rem" }}>Blog</Link>
            {isAuthenticated ? (
                <>
                    <Link to="/admin" style={{ marginRight: "1rem" }}>Admin</Link>
                    <button onClick={logout}>Log Out</button>
                </>
            ) : (
                <Link to="/login">Log In</Link>
            )}
        </nav>
    );
}
