import { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import Container from "./components/Container";
import Header from "./components/Header";
import InputTask from "./components/InputTask";

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


  return (
    <Container>
      <Header />
      <InputTask createTask={crearTask} />
    </Container>
  );
}
export default App;
