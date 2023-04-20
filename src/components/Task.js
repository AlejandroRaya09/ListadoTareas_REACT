import { Header, Icon, Grid, Segment, Label, Button } from "semantic-ui-react";


export default function Task(props) {
    const { task, deleteTask } = props
    const { idTask, taskName, categoryTask } = task

    return (
        <Grid.Column width={8} className="tasks-container">
            <Segment>
                {categoryTask && (
                    <Label color="teal" ribbon="right">
                        {categoryTask}
                    </Label>
                )}
                <Header as="h3" className="header-task">
                    {taskName}
                </Header>

                <Header as="h5">{idTask}</Header>

                <Grid center columns={2}>
                    <Grid.Column>
                        <Button color="red" onClick={()=>deleteTask(idTask)}>
                            <Icon name="remove circle"/>Eliminar
                        </Button>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Grid.Column>
    )
};
