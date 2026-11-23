import type {Post} from "./types.ts";
import {useState} from "react";

function ConsumoFetch() {
    const [postId, setPostId] = useState(1);
    const [post, setPost] = useState<Post | null>(null);

    const handleClick = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data: Post) => {
                setPost(data);
                alert(JSON.stringify(data, null, 2));
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
            <h2>FETCH API</h2>

            <label htmlFor="postId">id:</label>
            <input
                id="postId"
                type="text"
                value={postId}
                onChange={(e) => setPostId(Number(e.target.value))}
            />
            <button onClick={handleClick}>Buscar</button>

            {post && (
                <article>
                    <h3>{post.title}</h3>
                    <p>Usuario: {post.userId}</p>
                    <p>{post.body}</p>
                </article>
            )}
        </>
    );
}

export default ConsumoFetch;
