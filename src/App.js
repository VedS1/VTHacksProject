import Navbar from "./Navbar"
import Home from "./pages/Home"
import NGORegister from "./pages/NGORegister"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login";
import NGOInfo from "./pages/NGOInfo";
import DevRegister from "./pages/DevRegister";
import DevInfo from "./pages/DevInfo";

function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/ngoregister" element={<NGORegister />} />
                    <Route path="/ngoinfo" element={<NGOInfo />} />
                    <Route path="/devregister" element={<DevRegister />} />
                    <Route path="/devinfo" element={<DevInfo />} />
                </Routes>
            </div>
        </>
    )
}

export default App