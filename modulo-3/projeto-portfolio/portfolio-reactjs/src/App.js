import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import Curriculo from './pages/Curriculo';
import ProtectedRoute from './routes/protectedRoute';
import Register from './pages/Register';
import Admin from './pages/Admin';
import AddProject from './pages/AddProject';
import NotFound from './pages/NotFound';

function App() {
  return (
  <>
    <AuthProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin' element={
          <ProtectedRoute>
            <Admin/>
          </ProtectedRoute>
        }/>
        <Route path='/add-project' element={
          <ProtectedRoute>
            <AddProject/>
          </ProtectedRoute>
        }/>
        <Route path='/curriculo' element={
          <ProtectedRoute>
            <Curriculo/>
          </ProtectedRoute>
        }/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes> 
    </AuthProvider>     
  </>
  );
}

export default App;
