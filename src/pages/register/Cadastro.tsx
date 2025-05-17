import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios"; 
import "./Cadastro.css";

const Cadastro = () => {
  const navigate = useNavigate();

  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const [userNameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleUsernameChange = (value: string) => {
    setUsername(value);

    if (value.length < 3) {
      setUsernameError("O nome de usuário deve ter no mínimo 3 caracteres!");
    } else {
      setUsernameError("");
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value.length < 5 || !emailRegex.test(value)) {
      setEmailError("O e-mail digitado é inválido!");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);

    if (value.length < 6) {
      setPasswordError("A senha deve ter no mínimo 6 caracteres!");
    } else {
      setPasswordError("");
    }
  };

 const handleSubmit = async (event: { preventDefault: () => void }) => {
  event.preventDefault();

  if (!userNameError && !emailError && !passwordError) {
    try {
      const [year, month, day] = birthDate.split("-");
      const formattedBirthDate = `${day}-${month}-${year}`;

      const requestData = {
        email,
        password,
        name: userName,
        birthDate: formattedBirthDate,
      };

      const response = await axios.post("http://localhost:3000/api/users", requestData);

      const data = response.data;

      alert(data.mensagem || "Cadastro realizado com sucesso!");
      navigate("/");
      
    } catch (error: any) {
      console.error("Erro ao cadastrar:", error);

      if (error.response?.data?.mensagem) {
        alert(error.response.data.mensagem);
      } else {
        alert("Erro ao conectar com o servidor.");
      }
    }
  } else {
    console.log("Preencha os campos solicitados corretamente!");
  }
};


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="top-bar1">
          <img src="AutBot_Logo.png" alt="Logo" />
          <button className="botao-inicio1">AutBot</button>
          <button className="botao-sobre1">Sobre</button>
        </div>

        <div className="main-cadastro">
          <div className="left-cadastro">
            <h1>
              Que bom ter você aqui!
              <br />
              Cadastre-se para explorar o AutBot
            </h1>
            <img src="AutBot_Image.png" alt="AutBot" />
          </div>

          <div className="right-cadastro">
            <div className="card-cadastro">
              <h1>CADASTRO</h1>

              <div className="textfield">
                <label htmlFor="usuario">Usuário</label>
                <input
                  type="text"
                  name="usuario"
                  placeholder="Usuário"
                  onChange={(e) => handleUsernameChange(e.target.value)}
                />
                {userNameError && (
                  <p className="error-message">{userNameError}</p>
                )}
              </div>

              <div className="textfield">
                <label htmlFor="email">E-mail</label>
                <input
                  type="text"
                  name="email"
                  placeholder="E-mail"
                  onChange={(e) => handleEmailChange(e.target.value)}
                />
                {emailError && (
                  <p className="error-message">{emailError}</p>
                )}
              </div>

              <div className="textfield">
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  name="senha"
                  placeholder="Senha"
                  onChange={(e) => handlePasswordChange(e.target.value)}
                />
                {passwordError && (
                  <p className="error-message">{passwordError}</p>
                )}
              </div>

              <div className="textfield">
                <label htmlFor="data">Data de Nascimento</label>
                <input
                  type="date"
                  name="data"
                  placeholder="Data de Nascimento"
                  max={today}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>
              <div className="textfield">
                <label htmlFor="cadastrante">Cadastrante</label>
                <select name="cadastrante">
                  <option value="" disabled ></option>
                  <option value="professor">Professor</option>
                  <option value="cuidador">Cuidador</option>
                  <option value="usuario">Usuário</option>
                </select>


              </div>

              <button className="botao-cadastro">Continuar</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Cadastro;
