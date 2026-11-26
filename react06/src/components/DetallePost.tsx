import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Post } from "./types.ts";

const DetallePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => setPost(response.data))
            .catch(() => {
                setPost(null);
                setError(true);
            })
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <>
            <h2>Detalle del post</h2>
            <Link to="/">Volver a la lista</Link>

            {loading && <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Cargando..." width={200} />}
            {error && <p>No se pudo cargar el post.</p>}
            {post && (
                <ul>
                    <li><strong>ID:</strong> {post.id}</li>
                    <li><strong>Usuario (userId):</strong> {post.userId}</li>
                    <li><strong>Título:</strong> {post.title}</li>
                    <li><strong>Body:</strong> {String(post.body)}</li>
                </ul>
            )}
        </>
    )
}

export default DetallePost
