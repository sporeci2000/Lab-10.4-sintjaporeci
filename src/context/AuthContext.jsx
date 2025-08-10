import React, { createContext, useState } from "react";

//Create the AuthContext to provide authentication state and functions to components
export const AuthContext = createContext();

//AuthProvider component wraps parts of the app that need access to auth state
export function AuthProvider({ children }) {

    //isAuthenticated state tracks whether the user is logged in 
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function login() {
        setIsAuthenticated(true);
    }

    function logout() {
        setIsAuthenticated(false);
    }


    //Provide the auth state and functions to any child components via context
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
