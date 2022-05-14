import "./App.css";

import SignupWithValidation from "./components/Signup/SignupWithValidation";
import NavbarComponent from "./components/Navbar";
import Photos from "./components/Photos/Photos";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import PhotoEnlarged from "./components/photosEnlarged";
import Component404 from "./components/Component404";

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />

        <Routes>
          <Route index element={<Photos />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupWithValidation />} />
          <Route path="/photos/:id" element={<PhotoEnlarged />} />
          <Route path="*" element={<Component404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
