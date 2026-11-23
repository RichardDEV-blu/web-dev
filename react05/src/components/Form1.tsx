import {useState, type FormEvent} from "react";
import {Link, useNavigate} from "react-router-dom";
import type {FormState} from "../types.ts";

function Form1() {
    const [name, setName] = useState("");
    const [edad, setEdad] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const state: FormState = {message: name, edad: edad};
        navigate("/form2", {state: state});
    };

    return (
        <>
            <h2>FORM1</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                    <tr>
                        <td><label htmlFor="name">Nombre:</label></td>
                        <td>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="edad">Edad:</label></td>
                        <td>
                            <input
                                id="edad"
                                type="number"
                                value={edad}
                                onChange={(e) => setEdad(e.target.value)}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
                <input type="submit" value="Enviar"/>
            </form>
            <p><Link to="/form3">Ir a Form3 (estado con objeto persona)</Link></p>
        </>
    );
}

export default Form1;
