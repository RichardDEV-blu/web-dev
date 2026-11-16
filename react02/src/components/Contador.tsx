import {type ChangeEvent, useEffect, useState} from "react";

function Contador() {

    const [contador, setContador] = useState(0)
    const [name, setName] = useState("Mateo")
    useEffect(() => {
        console.log("Prueba epica, componente montado")
    })

    useEffect(() => {
        console.log(`Contador actualizado ${contador}`)
    },[contador])

    const handleUp = () => {
        setContador(contador + 1)
    }
    const handleDown = () => {
        setContador(contador - 1)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    return (
        <>

            <div> Valor {contador}</div>
            <br/>
            <button onClick={handleUp}>+</button>
            <button onClick={handleDown}>-</button>
            <br/>
            <div>
                Nombre:
                <input type={"text"} value={name} onChange={handleChange}/>
                <div>Hola {name}</div>
            </div>
        </>
    )
}

export default Contador