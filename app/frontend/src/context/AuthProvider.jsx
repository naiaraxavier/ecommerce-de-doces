import PropTypes from 'prop-types';
import AuthContext from './AuthContext';
import { useState, useMemo, useEffect } from 'react';

function AuthProvider({ children }) {

  const [isProfileBtnOpen, setIsProfileBtnOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Verifica se há um estado autenticado armazenado no localStorage
    const storedAuth = localStorage.getItem('isAuthenticated');
    // Se houver, converte para booleano
    return storedAuth ? JSON.parse(storedAuth) : false;
  });

  console.log(isAuthenticated, "auth");

  // Atualiza o localStorage sempre que o estado autenticado mudar
  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const values = useMemo(() => ({
    isAuthenticated,
    setIsAuthenticated,
    isProfileBtnOpen,
    setIsProfileBtnOpen
  }), [isAuthenticated, setIsAuthenticated, isProfileBtnOpen, setIsProfileBtnOpen]);

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider
