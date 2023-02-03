import { useState } from 'react';
import TaskList from './Components/TaskList';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");
  // getter ( todoList ) -> Récupérer le contenu du state
  // setter ( setTodoList(donnée) ) -> Mettre à jour le state

  const addTask = (event) => {
    event.preventDefault();
    // on défini notre state sur : [... anciennes données,nouvelle donnée]; 
    setTodoList([...todoList,task])
    setTask("");
    console.log(task);
  }
  return (
    <div className= "App">
      <h1>Bienvenue sur la TodoApp</h1>
      <form onSubmit={(event) => addTask(event)}>
        <input value={task} onChange={(event) => setTask(event.currentTarget.value)} type="text" placeholder='New task' />
        <button type="submit">Add Task</button>
      </form>

      <TaskList taskList={todoList}/>
    </div>
  );
}

export default App;