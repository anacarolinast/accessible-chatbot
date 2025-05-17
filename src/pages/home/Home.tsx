import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <div style={{ fontFamily: "'Varela Round', sans-serif" }}>
      <div style={{
        width: "100%",
        height: "70px",
        backgroundColor: "#b6d9ec",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        paddingLeft: "70px"
      }}>
        <img src="AutBot_Logo.png" alt="Logo" style={{ width: "3%", marginLeft: "70px" }} />
        <button style={{
          fontSize: "20px",
          fontWeight: "500",
          color: "#181d54",
          background: "transparent",
          border: "none",
          padding: "0",
          marginLeft: "5px",
          cursor: "pointer"
        }}>Início</button>
        <button style={{
          fontSize: "15px",
          color: "#181d54",
          background: "transparent",
          border: "none",
          marginLeft: "725px",
          cursor: "pointer"
        }}>Sobre</button>
        <button
          onClick={handleLogout}
          style={{
            fontSize: "15px",
            color: "#181d54",
            background: "transparent",
            border: "none",
            marginLeft: "100px",
            cursor: "pointer"
          }}
        >
          Sair
        </button>
      </div>

      <div style={{
        textAlign: "center",
        padding: "40px",
        color: "#181d54",
        paddingTop: "80px"
      }}>
        <h1 style={{
          fontSize: "2.5rem",
          marginBottom: "20px"
        }}>Bem-vindo(a) ao AutBot!</h1>
        <p style={{
          fontSize: "1.2rem",
          marginBottom: "30px"
        }}>Escolha uma opção no menu para começar.</p>
        <img src="AutBot_Image.png" alt="Imagem ilustrativa do AutBot" style={{
          maxWidth: "300px",
          width: "100%",
          height: "auto"
        }} />
      </div>
    </div>
  );
};

export default Home;
