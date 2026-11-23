import {useLocation, useNavigate} from "react-router-dom";

function Form2() {

    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as { message: string; edad: string } | null;

    const handleRegresar = () => {
        navigate("/");
    };

    return (
        <>
            <h2>FORM2</h2>
            {state && state.message ? (
                <p>Nombre recibido: <b>{state.message}</b></p>
            ) : (
                <p>No se ha recibido nombre</p>
            )}
            {state && state.edad ? (
                <p>Edad recibida: <b>{state.edad}</b></p>
            ) : (
                <p>No se ha recibido edad</p>
            )}
            <button type="button" onClick={handleRegresar}>
                Regresar
            </button>
        </>
    );
}

export default Form2;
