import { Select, Input, Button, Grid, Header, Icon } from "semantic-ui-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const options = [
  { key: "deporte", text: "Deporte", value: "deporte" },
  { key: "casa", text: "Casa", value: "casa" },
  { key: "oficina", text: "Oficina", value: "oficina" },
  { key: "otra", text: "Otra", value: "otra" },
];

export default function InputTask(props) {
  const [task, setTask] = useState({
    idTask: "",
    taskName: "",
    categoryTask: "",
  });

  const [error, setError] = useState(false);

  const { createTask } = props;

  //ASIGNAR VALORES AL TASK
  const onChangeTask = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeCategoryTask = (e, data) => {
    setTask({
      ...task,
      [data.name]: data.value,
    });
  };

  const onSubmitTask = (e) => {
    //TODO *QUE NO RECARGUE LA PAGINA*
    e.preventDefault(); //NO RECARGAR PAGINA

    //VALIDACION
    if (task.taskName.trim() === "" || task.categoryTask.trim() === "") {
      setError(true);
      return;
    }

    //ELIMINAR MENSAJE PREVIO SI EXISTE
    setError(false);

    //ASIGNAR ID
    task.idTask = uuidv4();

    //CREAR TAREA
    createTask(task);

    //LIMPIAR INPUTS
    setTask({
      idTask: "",
      taskName: "",
      categoryTask: "",
    });
  };

  return (
    <>
      <Grid centered columns={2}>
        <Input type="text" action>
          <Input
            size="small"
            icon="add"
            placeholder="Escribe tu tarea..."
            iconPosition="left"
            name="taskName"
            value={task.taskName}
            onChange={onChangeTask}
            //! onChange={()=> setError(true)} VER MENSAJE DE ERROR
          />

          <Select
            compact
            options={options}
            className="select-from-task"
            placeholder="Categoria"
            name="categoryTask"
            value={task.categoryTask}
            onChange={onChangeCategoryTask}
          />

          <Button type="submit" color="violet" onClick={onSubmitTask}>
            Añadir Tarea
          </Button>
        </Input>
      </Grid>

      {error && (
        <Grid centered>
          <Header as="h4" color="red" className="alert-error-form">
            <Icon name="close" />
            <Header.Content>La tarea es obligartoria</Header.Content>
            <Icon name="close" />
          </Header>
        </Grid>
      )}
    </>
  );
}
