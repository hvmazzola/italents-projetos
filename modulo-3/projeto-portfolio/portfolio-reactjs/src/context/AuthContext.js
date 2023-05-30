import React, { createContext } from 'react'
import useAuth from '../hooks/useAuth'


const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const { userLogged, loading, login, logout } = useAuth()

  if(loading) {
    return <h1>Carregando...</h1>
  }

  return (
    <AuthContext.Provider value={{ userLogged, login, logout }}>
      { children }
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }