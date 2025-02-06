import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import OfertaDeCursuri24 from "./Pages/OfertaDeCursuri24";
import OfertaDeCursuri25 from "./Pages/OfertaDeCursuri25";
import Praktikum from "./Pages/Praktikum";
import Sommerkurse from "./Pages/Sommerkurse";
import ImplicareSociala from "./Pages/ImplicareSociala";
import Header from "./Components/Header";

import Footer from "./Components/Footer";

export default function App() {
  return (
    <BrowserRouter basename="/GermanaCuClaudiu">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anul-scolar-2024" element={<OfertaDeCursuri24 />} />
        <Route path="/anul-scolar-2025" element={<OfertaDeCursuri25 />} />
        <Route path="/practica" element={<Praktikum />} />
        <Route path="/sommerkurse" element={<Sommerkurse />} />
        <Route path="/implicare-sociala" element={<ImplicareSociala />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
