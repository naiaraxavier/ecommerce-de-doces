import { useState, useContext } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import logo from '../images/logo.png';
import { useNavigate, Link } from 'react-router-dom';
import '../css/login-register.css'
import Swal from 'sweetalert2';
import AuthContext from '../context/AuthContext';
import CartContext from '../context/CartContext';

function Login() {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const { setIsAuthenticated } = useContext(AuthContext);
  const { isCheckout } = useContext(CartContext)

  const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const navigate = useNavigate();
  const MIN_PASSWORD_LENGTH = 6;

  const handleLogin = async () => {
    const userInfo = JSON.stringify({ username: userData.username });
    localStorage.setItem('user', userInfo);
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Login bem-sucedido, redirecionar para a página principal
        setIsAuthenticated(true)

        if (isCheckout) {
          // Se a rota anterior foi /checkout, redirecione de volta para /checkout
          navigate('/checkout');
        } else {
          // Senão, vá para a página de perfil
          navigate('/profile');
        }
      } else {
        // Se ocorrer um erro, exibir mensagem de erro
        Swal.fire({
          title: 'Usuário ou senha incorreto',
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
          <h2 className="login-text">Login</h2>

          <label htmlFor="email-input" className="input-with-icon">
            <FaEnvelope className="icon" />
            <input
              className="login-input"
              type="text"
              id="email-input"
              value={userData.username}
              placeholder="Email"
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
              placeholder="Senha"
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
              onClick={handleLogin}
            >
              Entrar
            </button>
          </div>
        </div>
        <Link to="/register">Não possui login? Cadastre-se aqui</Link>
      </div>
    </main>
  )
}

export default Login
