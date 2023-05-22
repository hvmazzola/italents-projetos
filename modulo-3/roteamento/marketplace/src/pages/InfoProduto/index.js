import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import './style.css'

const InfoProduto = () => {
    const { id } = useParams();
    const { state } = useLocation();

    return(
        <div>
            <h2>Produto {id}</h2>
            <p>A matrícula do meu produto é: { state }</p>
            <Outlet/>
        </div>
    )
}

export default InfoProduto;