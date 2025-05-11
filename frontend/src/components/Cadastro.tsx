import "./Cadastro.css"
import { useState } from "react"


const Cadastro = () => {

    const [userName, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthDate, setBirthDate] = useState("")

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        console.log("Cadastro realizado")
        console.log(userName, email, password, birthDate)
    }

    return (
         <form onSubmit={handleSubmit}>
        <div>
      <div className="top-bar">
        <img src="AutBot_Logo.png" alt="Logo" />
        <button className="botao-inicio">AutBot</button>
        <button className="botao-sobre">Sobre</button>
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
              <input type="text" name="usuario" placeholder="Usuário" onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className="textfield">
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="textfield">
              <label htmlFor="senha">Senha</label>
              <input type="password" name="senha" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="textfield">
              <label htmlFor="data">Data de Nascimento</label>
              <input type="date" name="data" placeholder="Data de Nascimento" onChange={(e) => setBirthDate(e.target.value)} />
            </div>

            <button className="botao-cadastro">Continuar</button>
          </div>
        </div>
      </div>
    </div>
    </form>

    )

}


export default Cadastro