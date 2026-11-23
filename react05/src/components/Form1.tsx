import {useState, type FormEvent} from "react";
import {useNavigate} from "react-router-dom";
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
        </>
    );
}

export default Form1;

/*
// VERSIÓN ALTERNATIVA
import {useState, type FormEvent} from "react";
import {useNavigate} from "react-router-dom";
import type {Persona} from "../types.ts";

function Form1() {
    const [persona, setPersona] = useState<Persona>({message: "", edad: ""});
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/form2", {state: persona});
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
                                    value={persona.message}
                                    onChange={(e) => setPersona({...persona, message: e.target.value})}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor="edad">Edad:</label></td>
                            <td>
                                <input
                                    id="edad"
                                    type="number"
                                    value={persona.edad}
                                    onChange={(e) => setPersona({...persona, edad: e.target.value})}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="Enviar"/>
            </form>
        </>
    );
}

export default Form1;
*/
