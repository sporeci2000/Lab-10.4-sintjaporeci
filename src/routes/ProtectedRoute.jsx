import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


//ProtectedRoute component restricts access to its children based on auth status
export default function ProtectedRoute({ children }) {

    //Get current authentication status from context
    const { isAuthenticated } = useContext(AuthContext);


    //If user is not authenticated, redirect to the login page
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }


    //If authenticated, render the child components normally
    return children;
}
