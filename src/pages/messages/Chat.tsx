import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios"; 
import "./Chat.css";
import { FaPaperPlane } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoMdChatboxes } from "react-icons/io";

const Chat = () => {

    const navigate = useNavigate();




  return (
    <div className="chat-container">
        <div className="top-bar">
  <img src="/AutBot_Logo.png" alt="Logo" />
  <button className="botao-inicio">AutBot</button>
  <button className="botao-sobre">Sobre</button>
  <button className="botao-perfil">Perfil</button>
</div>
      <aside className="sidebar">
        
        <div className="icon-section">

            <button title="buscar chat" className="send-button" ><IoMdSearch /></button>
          <button title="criar um novo chat" className="send-button"><IoMdChatboxes /></button>
        
        
          
        </div>
      </aside>

      <div className="main-chat">
        <header className="chat-header">
          <div></div>
          <div className="menu-links">
            <a href="#">Sobre</a>
            <a href="#">Perfil</a>
          </div>
        </header>

        <main className="chat-body">
          <div className="chat-card">
            <h2>Em que posso ajudar?</h2>
            <div className="chat-input-container">
              <input type="text" placeholder="Escreva sua mensagem aqui..." />
              <button className="send-button">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Chat;