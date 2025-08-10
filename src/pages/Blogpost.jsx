import { useParams } from "react-router-dom";
import { mockBlogData } from "../lib/posts";

export default function BlogPost() {
    const { slug } = useParams();
    const post = mockBlogData.find(p => p.slug === slug);

    if (!post) {
        return <h2>Post not found</h2>;
    }

    return (
        <div style={{ padding: "1rem" }}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}
