import React from "react";
import "semantic-ui-css/semantic.css";
import { Header, Container, Button, Grid, List } from "semantic-ui-react";

import Task from "../components/Task";
import NewTaskForm from "../components/NewTaskForm";

const HomePage = () => {
  const initialNewTask = {
    name: "",
    color: "",
  };

  //getter and setter
  //have to use react state if we want stuff to update on the page through the getters and setters
  const [newTaskOpen, setNewTaskOpen] = React.useState(false);
  const [newTask, setNewTask] = React.useState(initialNewTask);
  const [list, setList] = React.useState([]);

  function openNewTask() {
    //newTaskOpen = true;
    setNewTaskOpen(true);
  }

  function closeNewTask() {
    //newTaskOpen = false;
    setNewTaskOpen(false);
  }

  function showNewTaskOpen() {
    console.log(newTaskOpen);
  }

  function addNewTask() {
    //cloning the old list state
    const listClone = [...list];
    //pushing the new task to the clone list
    listClone.push(newTask);
    //setting the clone list as the main list
    setList(listClone);
    setNewTask(initialNewTask);
    closeNewTask();
  }

  /* const taskList = [];

  //pushing each new task into the taskList array and displaying the Task component on the page
  list.forEach((task, index) => {
    taskList.push(
      <Task
        key={`${task.name}-${index}`}
        name={task.name}
        color={task.color}
      ></Task>
    );
  }); */

  function editTask(index) {
    console.log("edit", index);
    const newList = list.map((task, i) => {
      if (i !== index) {
        return task;
      }

      return {
        name: `Edit ${task.name}`,
        color: task.color,
      };
    });
    setList(newList);
  }

  function deleteTask() {
    //research an array function called Array.filter
    //https://www.w3schools.com/jsref/jsref_filter.asp
  }

  //another way to do it rather than lines above ^^^, creates an empty array called taskList loops through the list
  const taskList = list.map((task, index) => {
    return (
      <Task
        key={`${task.name}-${index}`}
        name={task.name}
        color={task.color}
        editTask={editTask}
        index={index}
      />
    );
  });

  return (
    <React.Fragment>
      <Container>
        <Grid>
          <Grid.Column width="4">
            <Button icon="bars" onClick={showNewTaskOpen}></Button>
          </Grid.Column>
          <Grid.Column width="8">
            <Header textAlign="center" as="h1">
              Todo List
            </Header>
          </Grid.Column>
          <Grid.Column textAlign="right" width="4">
            <Button icon="plus" color="green" onClick={openNewTask}></Button>
          </Grid.Column>
        </Grid>

        {newTaskOpen ? (
          <NewTaskForm
            closeNewTask={closeNewTask}
            newTask={newTask}
            setNewTask={setNewTask}
            addNewTask={addNewTask}
          ></NewTaskForm>
        ) : null}

        <List>
          {/* <Task name="Task 1" color="orange"></Task>
          <Task name="Task 2" color="purple"></Task>
          <Task name="Task 3" color="blue"></Task> */}
          {taskList}
        </List>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
