import { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import Container from "./components/Container";
import Header from "./components/Header";
import InputTask from "./components/InputTask";
import TaskContent from "./components/TaskContent";

function App() {
  //PASAR LAS TAREAS A LOCALSTORGE
  let initialTasks = JSON.parse(localStorage.getItem("tasks"));

  if (!initialTasks) {
    initialTasks = [];
  }

  const [tasks, setTasks] = useState(initialTasks);

  useEffect(()=>{
    if(initialTasks){
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }else{
      localStorage.setItem("tasks", JSON.stringify([]))
    }

  }, [initialTasks,tasks])

  const crearTask = (task) => {
    setTasks([...tasks, task]);
  };


  const deleteTask = (id) => {
    const currentTask = tasks.filter((task)=> task.idTask !== id) //filtrar todas las tareas menos la que se selecciono

    setTasks(currentTask) // reescribir las tereas
  }


  return (
    <Container>
      <Header />
      <InputTask 
      createTask={crearTask} />
      <TaskContent tasks={tasks} deleteTask={deleteTask}/>
    </Container>
  );
}
export default App;
