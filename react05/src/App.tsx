import {Link, Route, Routes} from "react-router-dom";
import Form1 from "./components/Form1.tsx";
import Form2 from "./components/Form2.tsx";

function App() {
    return (
        <>
            <nav>
                | <Link to={"/"}>Form1</Link> | <Link to={"/form2"}>Form2</Link> |
            </nav>
            <Routes>
                <Route path={"/"} element={<Form1/>}/>
                <Route path={"/form2"} element={<Form2/>}/>
            </Routes>
        </>
    );
}

export default App;
