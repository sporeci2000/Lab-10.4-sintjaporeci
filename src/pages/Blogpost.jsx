//Import useParams hook to access dynamic URL parameters
import { useParams } from "react-router-dom";
import { mockBlogData } from "../lib/posts";


//BlogPost component renders the details of a single blog post based on the URL slug
export default function BlogPost() {

    //Extract the 'slug' parameter from the URL
    const { slug } = useParams();

    //Find the post in mock data that matches the slug from the URL
    const post = mockBlogData.find(p => p.slug === slug);

    if (!post) {
        return <h2>Post not found!</h2>;
    }


    //Render the blog post title and content
    return (
        <div style={{ padding: "1rem" }}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}
