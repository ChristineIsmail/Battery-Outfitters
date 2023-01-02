import Header from "./components/Header/Header";

import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage/HomePage";

// components
import BatteryPopup from "./components/BatteryPopup/BatteryPopup";
import AboutUpPopup from "./components/AboutUsPopup/AboutUsPopup";

import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
  return (
    <div className="App-container">
      <ContactUs />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/BatteryPopup" element={<BatteryPopup />} />
        <Route path="/AboutUsPopup" element={<AboutUpPopup />} />
        <Route path="/contactUsPopup" element={<ContactUsPopup />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
