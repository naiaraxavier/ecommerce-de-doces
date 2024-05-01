import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "../css/profile.css"

function Profile() {
  const [clientName, setClientName] = useState('');

  useEffect(() => {
    // Verifica se o nome do cliente está no localStorage
    const storedName = localStorage.getItem('user');
    if (storedName) {
      const userObject = JSON.parse(storedName);
      if (userObject.username) {
        // Se sim, define o nome do cliente com o valor de "username"
        setClientName(userObject.username);
      }
    }
  }, []);

  const emailParts = clientName.split('@');
  const name = emailParts[0];

  return (
    <>
      <Header />
      <Navbar />
      <main className="main-profile">
        <div className="profile-container">
          <div className="column-left">
            <div>
              <h2 className="nameCliente">Olá, <span>{name.charAt(0).toUpperCase() + name.slice(1) || 'Cliente'}!</span></h2>
              <h2>Seja bem vindo ao seu espaço!</h2>
            </div>
            <hr className="line"></hr>
            <div>
              <h2>{name.charAt(0).toUpperCase() + name.slice(1) || 'Cliente'}</h2>
              <p>{clientName || "email@email.com"}</p>
            </div>
            <hr className="line"></hr>
            <div className="history">
              <h2>Histórico de Compras</h2>
            </div>
          </div>
          <div>
            <h2>Editar Minhas Informações</h2>
            <form className="form-profile">
              <div className="div-form">
                <label htmlFor="name">Nome:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome completo"
                // value={ }
                // onChange={ }
                />

                <label htmlFor="phone">Telefone:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Telefone"
                // value={ }
                // onChange={ }
                />
              </div>
              <div className="div-form">

                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                // value={ }
                // onChange={ }
                />

                <label htmlFor="address">Endereço:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Endereço completo"
                // value={ }
                // onChange={ }
                />
              </div>
              <div className="div-form">
                <label htmlFor="obs">Observações:</label>
                <input
                  type="text"
                  id="obs"
                  name="obs"
                  placeholder="Observações"
                // value={ }
                // onChange={ }
                />
              </div>
            </form>
            <div className="btn-profile">
              <Link to="/">
                <button>Voltar</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Profile
