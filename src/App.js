import Navbar from "./Navbar"
import Home from "./pages/Home"
import NGORegister from "./pages/NGORegister"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login";

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/ngoregister" element={<NGORegister />} />
                </Routes>
            </div>
        </>
    )
}

export default App