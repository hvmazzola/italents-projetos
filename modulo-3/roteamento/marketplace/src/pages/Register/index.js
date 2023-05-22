import { useNavigate } from 'react-router-dom';
import './style.css'

const Register = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulário enviado.');
        navigate('/produtos', { state: 123456 });    
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor=''>Nome:</label>
                <input type='text'></input>
            </div>
            <div>
                <label htmlFor=''>E-mail:</label>
                <input type='email'></input>
            </div>
            <div>
                <label htmlFor=''>Senha:</label>
                <input type='password'></input>
            </div>
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default Register;