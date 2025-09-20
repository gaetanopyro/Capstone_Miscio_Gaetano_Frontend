import { Link } from "react-router-dom";

const Home = () => {
  const token = localStorage.getItem("token");
  return (
    <div className="home-bg p-4">
      <h1>🏠 Benvenuto su RescueDesk</h1>
      {!token ? (
        <>
          <p>
            Per iniziare fai il <Link to="/login">Login</Link> o <Link to="/register">Registrati</Link>.
          </p>
        </>
      ) : (
        <>
          <h5>
            Vai alla tua <Link to="/dashboard">Dashboard</Link> per gestire i ticket.
          </h5>
          <h5>
            Torna alla <Link to="/">Home</Link>
          </h5>
        </>
      )}
    </div>
  );
};
export default Home;
