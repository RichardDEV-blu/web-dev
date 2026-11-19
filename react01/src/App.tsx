import {useState} from "react";
import HolaMundo2, {type HolaMundo2Props} from "./components/HolaMundo2.tsx";

function App() {
    const [text, setText] = useState("Juan");

    const handleClick = () => {
        setText((current) => (current === "Juan" ? "Test" : "Juan"));
    };

    const props: HolaMundo2Props = {
        name: "Juanki",
        age: 13,
    };

    return (
        <>
            <HolaMundo2 name={text} age={12}/>
            <br/>
            <button onClick={handleClick}>Cambiar nombre</button>
            <br/>
            <HolaMundo2 {...props}/>
        </>

    );
}

export default App;
