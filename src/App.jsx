import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateTicket from "./pages/CreateTicket";
import Dashboard from "./pages/Dashboard";
import EditTicket from "./pages/EditTicket";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container className="mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit/:id" element={<EditTicket />} />
          <Route path="/create" element={<CreateTicket />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
