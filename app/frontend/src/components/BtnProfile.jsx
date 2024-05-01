import "../css/btnprofile.css"
import { useNavigate } from "react-router-dom";
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';


function BtnProfile() {
  const { setIsAuthenticated, setIsProfileBtnOpen } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsAuthenticated(false)
    setIsProfileBtnOpen(false)
    navigate("/")
  };

  const handlePerfil = async () => {
    setIsProfileBtnOpen(false)
    navigate("/profile")
  };


  return (
    <div className="btns-modal">
      <div className="btns-profile">
        <button onClick={handlePerfil}>Perfil</button>
        <button onClick={handleLogout}>Sair</button>
      </div>
    </div>
  )
}

export default BtnProfile
