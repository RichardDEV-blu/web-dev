function MyForm2() {
    const handleAction = (formData: FormData) => {
        const nombre = formData.get("nombre");
        const edad = formData.get("edad");
        const seleccionado = formData.get("check") !== null;

        alert(
            `Nombre: ${nombre ?? ""}\nEdad: ${edad ?? ""}\nSeleccionado: ${seleccionado ? "sí" : "no"}`
        );
    };

    return (
        <>
            <h2>My Form 2 </h2>
            <form action={handleAction}>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Nombre:</td>
                            <td>
                                <input type="text" name="nombre" />
                            </td>
                        </tr>
                        <tr>
                            <td>Edad:</td>
                            <td>
                                <input type="text" name="edad" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                Seleccionado: <input type="checkbox" name="check" />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <input type="submit" value="Enviar" />
            </form>
        </>
    );
}

export default MyForm2;
