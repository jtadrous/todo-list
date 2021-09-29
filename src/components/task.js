import React from "react";
//because this isn't a page, it is just a small component
//then you don't have to import the whole semantic.css
import {
  Button,
  Grid,
  List,
  Label,
  Progress,
  Divider,
} from "semantic-ui-react";

//when you send over props, they need to be in an object {}
//this was one parameter below vvv editTask
const Task = ({ name, color, prog, openEditTask, index, deleteTask }) => {
  function editCurrentTask() {
    openEditTask(index);
  }

  let progNum = "";
  if (prog === "New") {
    progNum = 0;
  } else if (prog === "Just Started") {
    progNum = 25;
  } else if (prog === "Half Done") {
    progNum = 50;
  } else if (prog === "Almost There") {
    progNum = 75;
  } else if (prog === "Complete") {
    progNum = 100;
  }

  return (
    <React.Fragment>
      <List.Item>
        <Grid columns="2">
          <Grid.Column>
            <Label color={color} size="big">
              {name}
            </Label>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Button onClick={deleteTask} icon="trash" color="black"></Button>
            <Button
              onClick={editCurrentTask}
              icon="pencil"
              color="blue"
            ></Button>
          </Grid.Column>
        </Grid>
        <br />
        <Progress percent={progNum}>{prog}</Progress>
      </List.Item>
      <Divider />
    </React.Fragment>
  );
};

export default Task;
