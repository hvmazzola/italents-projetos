import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <div>
            <h1>ERR 404: NOT FOUND</h1>
            <Link to='/'>Voltar à Home</Link>
        </div>
    )
}

export default NotFound;