import './Reverse.css';

const Reverse = ({ children }) => {
    const reverseText = children.split('').reverse().join('');
    return(
        <p className='reverse-text'>{children} <span>{'->'}</span> {reverseText}</p>
    )
};

export default Reverse;