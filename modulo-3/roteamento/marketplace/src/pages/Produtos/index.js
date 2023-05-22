import { Link, useLocation, useSearchParams } from 'react-router-dom';
import './style.css'

const Produtos = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { state } = useLocation();

    return(
        <div>
            <h2>Lista de Produtos</h2>
            <p>Usuário recém cadastrado: { state }</p>

            <p>Página: {searchParams.get('page')}</p>

            <Link to='/produto/1' state={'123456'}>Produto 1</Link>
            <br/>
            <Link to='/produto/1/reviews'>REVIEW</Link>
            <br/>
            <Link to='/produto/2'>Produto 2</Link>
            <br/>
            <Link to='/produto/2/reviews'>REVIEW</Link>
            <br/>
            <Link to='/produto/3'>Produto 3</Link>
            <br/>
            <Link to='/produto/3/reviews'>REVIEW</Link>

            <ul className='paginacao'>
                <li><button onClick={() => setSearchParams({page: 1})}>1</button></li>
                <li><button onClick={() => setSearchParams({page: 2})}>2</button></li>
                <li><button onClick={() => setSearchParams({page: 3})}>3</button></li>
                <li><button onClick={() => setSearchParams({page: 4})}>4</button></li>
            </ul>
        </div>
    )
}

export default Produtos;