import './App.css';
import Welcome from './components/Welcome/Welcome';
import Reverse from './components/Reverse/Reverse';
import ToDoList from './components/ToDoList/ToDoList';



function App() {
  return (
    <div className="App">
        <Welcome sobrenome="Mazzola" nome="Henrique"/>
        <div className='reverse'>
          <p className='app-text'>Os textos abaixo são revertidos!</p>
          <Reverse>
            Mazzola
          </Reverse>
          <Reverse>
            você está invertido!
          </Reverse>
          <ToDoList>
          </ToDoList>
        </div>
    </div>
  );
}

export default App;