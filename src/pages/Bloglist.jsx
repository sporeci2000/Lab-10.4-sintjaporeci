//Import Link component to create navigation links
import { Link } from "react-router-dom";
import { mockBlogData } from "../lib/posts";

//BlogList component renders a list of blog posts with clickable links
export default function BlogList() {
    return (
        <div style={{ padding: "1rem" }}>
            <h1>Blog Posts:</h1>
            <ul>
                {/* Loop through each post in the mock data */}
                {mockBlogData.map(post => (

                    <li key={post.id}>
                        {/* Link to the dynamic blog post page using the post's slug */}
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
