import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Properties from "./pages/Properties";
import AddProperty from "./pages/AddProperty";

function App() {

  return (

    <div>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/properties" element={<Properties />} />

        <Route path="/add-property" element={<AddProperty />} />

      </Routes>

      <Footer />

    </div>

  );

}

export default App;