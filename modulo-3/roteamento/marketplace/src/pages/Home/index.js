import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1>Homepage</h1>
            <Link to="/login">LOGIN</Link>
        </div>
    )
}

export default Home;