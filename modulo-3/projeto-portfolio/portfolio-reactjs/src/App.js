import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import Curriculo from './pages/Curriculo';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
  <>
    <AuthProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/curriculo' element={
          <ProtectedRoute>
            <Curriculo/>
          </ProtectedRoute>
        }/>
      </Routes> 
    </AuthProvider>     
  </>
  );
}

export default App;
