import {useState, type FormEvent} from "react";
import {useNavigate} from "react-router-dom";

function Form1() {
    const [name, setName] = useState("");
    const [edad, setEdad] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/form2", {state: {message: name, edad: edad}});
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
