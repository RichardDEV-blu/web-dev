import {Link, Route, Router, Routes} from "react-router-dom";
import Contact from "./components/Contact.tsx";
import Home from "./components/Home.tsx";

function App() {
    return (
        <>
            <nav>
                |
                <Link to={"/"}>Home</Link> |
                <Link to={"/contact/test1"}>Contact1</Link> |
                <Link to={"/contact/test2"}>Contact2</Link>
                |
            </nav>
            <br/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/contact/:name" element={<Contact/>}/>
            </Routes>


        </>


    )

}

export default App
