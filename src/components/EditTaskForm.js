import React from "react";
import {
  Header,
  Button,
  Segment,
  Form,
  Select,
  Input,
} from "semantic-ui-react";

const EditTaskForm = ({ closeEditTask, oldTask, setOldTask, editTask }) => {
  function changeOldTask(e, { value, name }) {
    //creating a spread, copying each of the name:value pairs and saving them
    const edittedTaskClone = { ...oldTask };
    edittedTaskClone[name] = value;
    setOldTask(edittedTaskClone);
  }

  //console.log(oldTask);

  return (
    <React.Fragment>
      <Segment color="blue">
        <Header as="h2">Edit Task</Header>
        <Form>
          <Form.Field
            control={Input}
            label="Task Name"
            placeholder={oldTask.name}
            onChange={changeOldTask}
            name="name"
          />
          <Form.Field
            control={Select}
            label="Task Color"
            placeholder={oldTask.color}
            options={[
              { text: "Purple", value: "purple" },
              { text: "Red", value: "red" },
              { text: "Orange", value: "orange" },
              { text: "Yellow", value: "yellow" },
            ]}
            onChange={changeOldTask}
            name="color"
          />
          <Form.Field
            control={Select}
            label="Progress"
            placeholder={oldTask.prog}
            options={[
              { text: "New", value: "New" },
              { text: "Just Started", value: "Just Started" },
              { text: "Half Done", value: "Half Done" },
              { text: "Almost There", value: "Almost There" },
              { text: "Complete", value: "Complete" },
            ]}
            onChange={changeOldTask}
            name="prog"
          />
          <Button.Group fluid>
            <Button type="button" onClick={closeEditTask}>
              Cancel
            </Button>
            <Button.Or />
            <Button onClick={editTask} type="button" color="blue">
              Submit Changes
            </Button>
          </Button.Group>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default EditTaskForm;
