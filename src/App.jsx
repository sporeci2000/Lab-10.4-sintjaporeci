import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./pages/Bloglist";
import BlogPost from "./pages/Blogpost";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Blog list as homepage */}
        <Route path="/" element={<BlogList />} />

        {/* Blog list page */}
        <Route path="/blog" element={<BlogList />} />

        {/* Dynamic blog post page */}
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}
