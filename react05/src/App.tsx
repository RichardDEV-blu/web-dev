import {Route, Routes} from "react-router-dom";
import Form1 from "./components/Form1.tsx";
import Form2 from "./components/Form2.tsx";
import Form3 from "./components/Form3.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Form1/>}/>
                <Route path={"/form2"} element={<Form2/>}/>
                <Route path={"/form3"} element={<Form3/>}/>
            </Routes>
        </>
    );
}

export default App;
