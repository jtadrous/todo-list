import React from "react";
//because this isn't a page, it is just a small component
//then you don't have to import the whole semantic.css
import { Button, Grid, List, Label } from "semantic-ui-react";

//when you send over props, they need to be in an object {}
const Task = ({ name, color, editTask, index }) => {
  //console.log(name, color);

  function editCurrentTask() {
    editTask(index);
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
            <Button icon="trash" color="black"></Button>
            <Button
              onClick={editCurrentTask}
              icon="pencil"
              color="blue"
            ></Button>
          </Grid.Column>
        </Grid>
      </List.Item>
    </React.Fragment>
  );
};

export default Task;
