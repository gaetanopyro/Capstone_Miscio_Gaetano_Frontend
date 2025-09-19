import { Link } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("token");
  return (
    <div className="p-4">
      <h1>🏠 Benvenuto su RescueDesk</h1>
      {!token ? (
        <>
          <p>
            Per iniziare fai il <Link to="/login">Login</Link> o <Link to="/register">Registrati</Link>.
          </p>
        </>
      ) : (
        <>
          <p>
            Vai alla tua <Link to="/dashboard">Dashboard</Link> per gestire i ticket.
          </p>
          <p>
            Torna alla <Link to="/">Home</Link>
          </p>
        </>
      )}
    </div>
  );
};
export default Home;
