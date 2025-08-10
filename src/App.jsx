import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./pages/Bloglist";
import BlogPost from "./pages/Blogpost";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    //Wrap the entire app in AuthProvider to provide auth state and functions globally
    <AuthProvider>

      {/* Router provides routing context for nested Route components */}
      <Router>
        <Navbar />

        {/* Routes define URL paths and which component to render */}
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/blog" element={<BlogList />} />

          {/* Dynamic route for individual blog posts, using slug param */}
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
