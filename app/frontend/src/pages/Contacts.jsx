import { FaRoute, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaClock } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from 'react';
import logo from "../images/logo.png"
import "../css/contacts.css"

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // enviar os dados do formulário para o servidor
    console.log(formData);
    // Limpa o formulário após o envio
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <Header />
      <Navbar />
      <main className='main-contacts'>
        <div className="form-container">
          <h2>Entre em Contato</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Mensagem:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <button type="submit" className="form-button">Enviar</button>
          </form>
        </div>


        <div className='content-contacts'>
          <div className="contacts">
            <img src={logo} alt="logo" />
            <p>
              <FaRoute className='i' />
              Rua Sete de Setembro, 999, Florianópolis - SC
            </p>
            <div className="c-address">
              <FaClock className='i' />
              <div>
                <p>Terça – Domingo 13:00 – 22:00</p>
                <p>Segunda: fechado</p>
              </div>
            </div>
            <p>
              <FaWhatsapp className='i' />
              (48) 99999-9999
            </p>

            <p>
              <MdEmail className='i' />
              help@petitfour.com
            </p>

          </div>

          <div className='social-contacts'>
            <a href="#" target="_blank"><FaFacebook /></a>
            <a href="#" target="_blank"><FaInstagram /></a>
            <a href="#" target="_blank"><FaTwitter /></a>
          </div>

        </div>
      </main >
      <Footer />
    </>
  )
}

export default Contacts
