import React from "react";
import {
  Header,
  Button,
  Segment,
  Form,
  Select,
  Input,
} from "semantic-ui-react";
//import {Link} from 'gatsby';

//all components need camel case names, the first letter has to be capitalized too
const NewTaskForm = ({ closeNewTask, newTask, setNewTask, addNewTask }) => {
  function changeNewTask(e, { value, name }) {
    //creating a spread, copying each of the name:value pairs and saving them
    const newTaskClone = { ...newTask };
    newTaskClone[name] = value;
    setNewTask(newTaskClone);

    //console.log(name, value);
  }

  return (
    <React.Fragment>
      <Segment>
        <Header as="h2">New Task</Header>
        <Form>
          <Form.Field
            control={Input}
            label="Task Name"
            placeholder="Enter task name..."
            value={newTask.name}
            onChange={changeNewTask}
            name="name"
          />
          <Form.Field
            control={Select}
            label="Task Color"
            placeholder="Choose task color..."
            options={[
              { text: "Red", value: "red" },
              { text: "Yellow", value: "yellow" },
              { text: "Green", value: "green" },
            ]}
            value={newTask.color}
            onChange={changeNewTask}
            name="color"
          />
          <Button.Group fluid>
            <Button type="button" onClick={closeNewTask}>
              Cancel
            </Button>
            <Button.Or />
            <Button onClick={addNewTask} type="button" color="green">
              Add Task
            </Button>
          </Button.Group>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default NewTaskForm;
