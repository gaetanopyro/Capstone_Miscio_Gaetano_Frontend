import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import { Container } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Header />
        <Container className="mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<CreateTicket />} />
          </Routes>
        </Container>
      </Router>
    </BrowserRouter>
  );
}

export default App;
