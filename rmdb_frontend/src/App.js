import React from "react";
// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Films from "./components/Films";
import Likes from "./components/Likes";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
import Person from "./components/Person";
import RegisterModal from "./components/RegisterModal";
import Watchlist from "./components/Watchlist";
// Context
import { AuthProvider } from "./context/AuthContext";
// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Styles
import { GlobalStyle } from "./GlobalStyle";
// Utils
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <RegisterModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":movieId" element={<Movie />} />
          <Route path="person/:personId" element={<Person />} />
          {/* User pages */}
          <Route
            path="/films"
            element={
              <ProtectedRoute redirect={"/"}>
                <Films />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/likes"
            element={
              <ProtectedRoute redirect={"/"}>
                <Likes />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/watchlist"
            element={
              <ProtectedRoute redirect={"/"}>
                <Watchlist />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <GlobalStyle />
      </AuthProvider>
    </Router>
  );
}

export default App;
