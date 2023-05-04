import './ToDoItem.css';

const ToDoItem = ({ tarefa }) => {
    return(
    <li className='to-do-item'>
        <input type='checkbox'/>
        {tarefa}
    </li>
    )
};

export default ToDoItem;