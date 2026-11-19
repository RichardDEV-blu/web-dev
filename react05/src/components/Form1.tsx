import {useState, type FormEvent} from "react";
import {useNavigate} from "react-router-dom";

function Form1() {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/form2", {state: {message: name}});
    };

    return (
        <>
            <h2>FORM1</h2>
            <label htmlFor="name">Nombre: </label>
            <form onSubmit={handleSubmit}>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="submit" value="Enviar"/>
            </form>
        </>
    );
}

export default Form1;
