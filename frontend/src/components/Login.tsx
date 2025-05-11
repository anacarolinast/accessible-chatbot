import "./Login.css"
import { useState } from "react"

const Login = () => {

    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        console.log("Login realizado")
        console.log(userName, password)
    }

    return (
        <form onSubmit={handleSubmit}>

       <div>
      <div className="top-bar">
        <img src="AutBot_Logo.png" alt="Logo" />
        <button className="botao-inicio">AutBot</button>
        <button className="botao-sobre">Sobre</button>
        <button className="botao-cadastre">Cadastre-se</button>
      </div>

      <div className="main-login">
        <div className="left-login">
          <h1>
            Bem-vindo ao AutBot!
            <br />
            Seu apoio acessível sobre TEA
          </h1>
          <img src="AutBot_Image.png" alt="AutBot" />
        </div>

        <div className="right-login">
          <div className="card-login">
            <h1>LOGIN</h1>

            <div className="textfield">
              <label htmlFor="usuario">Usuário</label>
              <input type="text" name="usuario" placeholder="Usuário" onChange={(e) => setUsername(e.target.value)}  />
            </div>

            <div className="textfield">
              <label htmlFor="senha">Senha</label>
              <input type="password" name="senha" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button className="botao-login">Login</button>
            <button className="botao-esqueci-senha">Esqueci minha senha</button>
          </div>
        </div>
      </div>
    </div>
    </form>
    )
}

export default Login