import { useState } from 'react';
import './ToDoForm.css';

const ToDoForm = ({onAdd}) => {

    const [tarefaText, setTarefaText] = useState('');
    

    const handleChange = (event) => {
        setTarefaText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd(tarefaText);
        setTarefaText('');
    }

    return(
    <form className='to-do-form' onSubmit={handleSubmit}>
        <label htmlFor='tarefa'>Tarefa:</label>
        <input type='text' id='tarefa' placeholder='Digite a sua nova tarefa' onChange={handleChange} value={tarefaText}/>
        <button type='submit'>Enviar</button>
    </form>
    )
};

export default ToDoForm;