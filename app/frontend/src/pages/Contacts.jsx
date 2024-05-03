import { FaRoute, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaClock } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Footer from "../components/Footer"
import logo from "../images/logo.png"
import "../css/contacts.css"

function Contacts() {
  return (
    <>
      <Header />
      <Navbar />
      <main className='main-contacts'>
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
