import {useState, type FormEvent} from "react";
import {useNavigate} from "react-router-dom";
import type {Persona} from "../types.ts";

function Form3() {
    const [persona, setPersona] = useState<Persona>({message: "", edad: ""});
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/form2", {state: persona});
    };

    return (
        <>
            <h2>FORM3</h2>
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

export default Form3;
