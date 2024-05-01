import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { useState } from 'react';
import Swal from 'sweetalert2';
import '../css/login-register.css'

function Register() {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const navigate = useNavigate();
  const MIN_PASSWORD_LENGTH = 6;

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Cadastro bem-sucedido, redirecionar para a página de login
        Swal.fire({
          icon: 'success',
          title: 'Cadastro realizado com sucesso!',
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: 'swal2-small',
            title: 'swal2-title-small',
            container: 'swal2-container',
          }
        });
        navigate('/login');
      } else {
        // Se ocorrer um erro, exibir uma mensagem de erro
        Swal.fire({
          icon: 'error',
          title: 'Erro ao cadastrar usuário.',
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: 'swal2-small',
            title: 'swal2-title-small',
            container: 'swal2-container',
          }
        });
      }
    } catch (error) {
      console.error('Erro ao enviar requisição:', error);
    }
  };

  return (
    <main className="login-background">
      <div className="login-container">
        <div className="box-image">
          <img className="img-logo" src={logo} alt="logo" />
        </div>

        <div className="login-form">
          <h2 className="login-text">Cadastro</h2>

          <label htmlFor="email-input" className="input-with-icon">
            <FaEnvelope className="icon" />
            <input
              className="login-input"
              type="text"
              id="email-input"
              value={userData.username}
              placeholder="Cadastre um email"
              onChange={
                ({ target }) => setUserData({ ...userData, username: target.value })
              }
            />
          </label>
          <label htmlFor="password-input" className="input-with-icon">
            <FaLock className="icon" />
            <input
              className="login-input"
              type="password"
              id="password-input"
              value={userData.password}
              placeholder="Cadastre uma senha"
              onChange={({ target }) => setUserData({
                ...userData, password: target.value,
              })}
            />
          </label>
          <div className="button-enter">
            <button
              className="login-submit-btn"
              disabled={
                !(emailValidation.test(userData.username)
                  && userData.password.length >= MIN_PASSWORD_LENGTH)
              }
              onClick={handleRegister}
            >
              Entrar
            </button>
          </div>
        </div>
        <Link to="/login">Já possui uma conta? Faça o login</Link>
      </div>
    </main>
  )
}

export default Register
