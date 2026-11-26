import { Routes, Route } from "react-router-dom";
import ConsumoFetch from "./components/ConsumoFetch.tsx";
import ConsumoAxios from "./components/ConsumoAxios.tsx";
import DetallePost from "./components/DetallePost.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <ConsumoFetch/>
                    <br/>
                    <ConsumoAxios/>
                </>
            } />
            <Route path="/posts/:id" element={<DetallePost />} />
        </Routes>
    )
}

export default App
