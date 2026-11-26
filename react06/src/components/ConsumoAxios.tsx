import axios from "axios";
import type {Post} from "./types.ts";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function ConsumoAxios() {

    const navigate = useNavigate();
    const [post, setPost] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false)

    const handleClick = () => {
        setLoading(true)
        axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts").then
        (response => {
            setPost(response.data)
        }).catch(() => alert()).finally(() => {
            setLoading(false)
        })
    }

    return <>
    <h2>AXIOS</h2>
    <button onClick={handleClick}>CLICK para axios</button>

    {loading && <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Cargando..." width={200} />}
    <table style={{width: "100%", border: "1px solid black"}}>
        <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Detalle</th>
        </tr>
        </thead>
        <tbody>

        {post.map((p) => (<tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.title}</td>
            <td>{String(p.body)}</td>
            <td><button onClick={() => navigate(`/posts/${p.id}`)}>Ver detalle</button></td>
        </tr>))}

        </tbody>
    </table>
    </>
}

export default ConsumoAxios