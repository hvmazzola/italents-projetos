import { useState } from 'react';
import './ToDoList.css';
import ToDoItem from '../ToDoItem/ToDoItem';
import ToDoForm from '../ToDoForm/ToDoForm';

const ToDoList = () => {

    const [tarefas, setTarefas] = useState([]);

    const addToDo = (params) => {
        setTarefas([...tarefas, params]);
    }

    return(
        <section className='to-do-section'>
            <h2 className='to-do-title'>Minha lista de tarefas</h2>
            <ToDoForm onAdd={addToDo}/>
            <ol className='to-do-list'>
                {tarefas.map((tarefa, index) => (
                    <ToDoItem tarefa={tarefa} key={index}/>
                ))}
            </ol>
        </section>
    )
};

export default ToDoList;