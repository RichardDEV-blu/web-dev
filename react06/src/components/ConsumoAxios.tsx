import axios from "axios";
import type {Post} from "./types.ts";
import {useState} from "react";

function ConsumoAxios() {

    const [post, setPost] = useState<Post[]>([]);

    const handleClick = () => {
        axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts").then
        (response => {
            setPost(response.data)
        }).catch(() => alert()).finally()
    }

    return <>
        <h2>AXIOS</h2>
        <button onClick={handleClick}>CLICK para axios</button>
        <table style={{width: "100%", border: 1}}>
            <thead>


            <tr>

                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
            </tr>


            </thead>

            <tbody>
            {post.map((p) => (
                <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.title}</td>
                    <td>{String(p.body)}</td>
                </tr>
            ))}
            </tbody>
        </table>

    </>
}

export default ConsumoAxios