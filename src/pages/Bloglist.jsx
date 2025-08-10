import { Link } from "react-router-dom";
import { mockBlogData } from "../lib/posts";

export default function BlogList() {
    return (
        <div style={{ padding: "1rem" }}>
            <h1>Blog Posts</h1>
            <ul>
                {mockBlogData.map(post => (
                    <li key={post.id}>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
