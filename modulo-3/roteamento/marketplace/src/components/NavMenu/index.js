import { Link } from 'react-router-dom';
import './style.css'
import styled from 'styled-components';

const NavMenu = () => {

    const Button = styled.button`
        background: transparent;
        border-radius: 3px;
        border: 2px solid palevioletred;
        color: palevioletred;
        margin: 0 1em;
        padding: 0.25em 1em;
    `

    return(
        <nav>
            <h1>Marketplace</h1>
            <ul>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/login'>LOGIN</Link>
                </li>
                <li>
                    <Link to='/produtos'>PRODUTOS</Link>
                </li>
                <li>
                    <Link to='/register'>FORMULÁRIO</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavMenu;