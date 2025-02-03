import Home from "./Pages/Home";
import Details from "./Pages/Details";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
