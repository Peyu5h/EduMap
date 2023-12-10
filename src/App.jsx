import "./App.css";
// import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import AtharvaCollege from "./pages/AtharvaCollege";
import ClgNotFound from "./components/clgNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <Routes>
          <Route path="/EduMap" element={<HomePage />} />
          <Route path="EduMap/atharva" element={<AtharvaCollege />} />
          <Route path="EduMap/error404" element={<ClgNotFound />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default App;
