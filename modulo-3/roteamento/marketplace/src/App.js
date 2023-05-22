import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Produtos from './pages/Produtos';
import InfoProduto from './pages/InfoProduto';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import ProductReviews from './pages/ProductReviews';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/produtos' element={<Produtos/>}/>
        <Route path='/produto/:id' element={<InfoProduto/>}>
          <Route path='reviews' element={<ProductReviews/>}/>
        </Route>
        <Route path='/register' element={<Register/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
