import React, { useState } from "react";
// Component
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import Person from "./components/Person";
import RegisterModal from "./components/RegisterModal";
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Style
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Router>
      <Header modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <RegisterModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":movieId" element={<Movie />} />
        <Route path="person/:personId" element={<Person />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
