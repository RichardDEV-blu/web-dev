import { useState, type ChangeEvent, type FormEvent } from "react";

function MyForm1() {
    const [nombre, setNombre] = useState("");
    const [check, setCheck] = useState(false);

    const handleNombreChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNombre(event.target.value);
    };

    const handleCheckChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCheck(event.target.checked);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ nombre, check });
    };

    return (
        <>
            <h2>My Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nombre:{" "}
                        <input
                            type="text"
                            name="nombre"
                            value={nombre}
                            onChange={handleNombreChange}
                        />
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="check"
                            checked={check}
                            onChange={handleCheckChange}
                        />{" "}
                        Seleccionado
                    </label>
                </div>

                <input type="submit" value="Enviar Formulario" />
            </form>
        </>
    );
}

export default MyForm1;