import {useLocation, useNavigate} from "react-router-dom";
import type {FormState} from "../types.ts";

function Form2() {

    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as FormState | null;

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

/*
// VERSIÓN ALTERNATIVA

import {useLocation, useNavigate} from "react-router-dom";
import type {Persona} from "../types.ts";

function Form2() {
    const location = useLocation();
    const navigate = useNavigate();
    const persona = location.state as Persona | null;

    const handleRegresar = () => {
        navigate("/");
    };

    return (
        <>
            <h2>FORM2</h2>
            {persona && persona.message ? (
                <p>Nombre recibido: <b>{persona.message}</b></p>
            ) : (
                <p>No se ha recibido nombre</p>
            )}
            {persona && persona.edad ? (
                <p>Edad recibida: <b>{persona.edad}</b></p>
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
*/
