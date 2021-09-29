import React from "react";
import "semantic-ui-css/semantic.css";
import {
  Header,
  Container,
  Button,
  Grid,
  List,
  Message,
} from "semantic-ui-react";

import Task from "../components/Task";
import NewTaskForm from "../components/NewTaskForm";
import EditTaskForm from "../components/EditTaskForm";

const HomePage = () => {
  const initialNewTask = {
    name: "",
    color: "",
    prog: "",
  };

  const [list, setList] = React.useState([]); //state for updating the task list
  const [messageOpen, setMessageOpen] = React.useState(false); //state for showing the message

  //display message
  function openMessage() {
    setMessageOpen(true);
  }

  //hide messsage
  function closeMessage() {
    setMessageOpen(false);
  }

  //~~~start of code for creating a new task~~~
  //have to use react state if we want stuff to update on the page through the getters and setters
  const [newTaskOpen, setNewTaskOpen] = React.useState(false); //state for opening the task form
  const [newTask, setNewTask] = React.useState(initialNewTask); //state for saving a new task

  //display new task form
  function openNewTask() {
    setNewTaskOpen(true);
  }

  //hide new task form
  function closeNewTask() {
    setNewTaskOpen(false);
  }

  //fake hamburger menu button
  function showNewTaskOpen() {
    console.log(newTaskOpen);
  }

  //adding the new task to the list and closing the new task form
  function addNewTask() {
    //cloning the old list state
    const listClone = [...list];
    //pushing the new task to the clone list
    listClone.push(newTask);
    //setting the clone list as the main list
    setList(listClone);
    setNewTask(initialNewTask);
    closeNewTask();
    openMessage();
  }

  //~~~start of code for editing a task~~~
  const [editTaskOpen, setEditTaskOpen] = React.useState(false); //state for opening the edit task form
  const [oldTask, setOldTask] = React.useState(); //state for saving the edited task

  //grab old task data and display it in the edit task form
  function openEditTask(index) {
    let oldTaskData = list[index];
    oldTaskData["index"] = index;
    setOldTask(oldTaskData);
    setEditTaskOpen(true);
  }

  //hide edit task form
  function closeEditTask() {
    setEditTaskOpen(false);
  }

  //loops through the task list and changes the old task data based on the index given
  //updates the task list and closes the edit task form
  function editTask() {
    //console.log(oldTask);
    const newList = list.map((task, i) => {
      if (i !== oldTask.index) {
        return task;
      }

      return {
        name: oldTask.name,
        color: oldTask.color,
        prog: oldTask.prog,
      };
    });

    setList(newList);
    closeEditTask();
  }

  //~~~start of code for deleting a task~~~
  //finds the current task and removes it from the list array
  //updates the list array state so the changes reflect on the page
  function deleteTask() {
    if (list.length <= 1) {
      setList([]);
    } else {
      const findTask = list.filter((arr) => {
        return arr.pop();
      });

      //console.log(deleteTask);
      setList(findTask);
    }
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

  //another way to do it rather than lines above ^^^
  //creates an empty array called taskList and loops through the list
  const taskList = list.map((task, index) => {
    return (
      <Task
        key={`${task.name}-${index}`}
        name={task.name}
        color={task.color}
        prog={task.prog}
        index={index}
        openEditTask={openEditTask}
        deleteTask={deleteTask}
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

        {messageOpen ? (
          <Message
            onDismiss={closeMessage}
            header="New Task Added!"
            content="Check below for your new task."
          ></Message>
        ) : null}

        {newTaskOpen ? (
          <NewTaskForm
            closeNewTask={closeNewTask}
            newTask={newTask}
            setNewTask={setNewTask}
            addNewTask={addNewTask}
          ></NewTaskForm>
        ) : null}

        {editTaskOpen ? (
          <EditTaskForm
            closeEditTask={closeEditTask}
            oldTask={oldTask}
            setOldTask={setOldTask}
            editTask={editTask}
          ></EditTaskForm>
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
