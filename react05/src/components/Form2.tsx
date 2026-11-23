import {useLocation, useNavigate} from "react-router-dom";

function Form2() {

    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as { message: string } | null;

    const handleRegresar = () => {
        navigate("/");
    };

    return (
        <>
            <h2>FORM2</h2>
            {state && state.message ? (
                <p>Nombre recibido: {state.message}</p>
            ) : (
                <p>No se ha recibido nombre</p>
            )}
            <button type="button" onClick={handleRegresar}>
                Regresar
            </button>
        </>
    );
}

export default Form2;
