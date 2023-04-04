import { Select, Input, Button, Grid, Header, Icon } from "semantic-ui-react"
import { useState } from "react"


const options = [
    {key:"deporte", text:"Deporte", value:"deporte"},
    {key:"casa", text:"Casa", value:"casa"},
    {key:"oficina", text:"Oficina", value:"oficina"},
    {key:"otra", text:"Otra", value:"otra"}
]

export default function InputTask() {

const [task, useTask] = useState({
    idTask: "",
    taskName: "",
    categoryName: ""
});
const [error, setError] = useState(false)

const onChangeTask = (e) =>{

}
    return (
        <>
            <Grid centered columns={2}>
                <Input type="text" action>
                    <Input size="small"
                     icon="add" 
                     placeholder="Escribe tu tarea..." 
                     iconPosition="left" 
                     name="taskName" 
                     value={task.taskName}
                     onChange={onChangeTask}/>


                    <Select compact
                     options={options} 
                     className="select-from-task" 
                     name="categoryTask" 
                     placeholder="Categoria"
                     value={task.categoryName}/>

                    <Button type="submit" 
                    color="violet">Añadir Tarea</Button>
                </Input>
            </Grid>
            {error && (
                <Grid centered>
                    <Header as ="h4" color="red" className="alert-error-form">
                    <Icon name="close" />
                    <Header.Content>La tearea es obligartoria</Header.Content>
                    <Icon name="closed" />
                    </Header>
                </Grid>
            )}
        </>
    )
};
