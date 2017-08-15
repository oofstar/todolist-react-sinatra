import React from 'react';
import TaskList from './../components/TaskList';
import TaskForm from './../components/TaskForm';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: ""
    }
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
  }

  getTasks() {
    fetch('/api/v1/tasks')
      .then(response => response.json())
      .then(body => {
        this.setState({
          tasks: body.tasks
        });
      })
  }

  componentDidMount() {
    this.getTasks();
  }

  handleTaskChange(event) {
    this.setState({ newTask: event.target.value })
  }

  handleFormSubmit(event) {
    let tasks = this.state.tasks
    event.preventDefault();
    fetch('/api/v1/tasks', { method: 'POST', credentials: 'same-origin', body: this.state.newTask})
      .then(response => response.json())
      .then(task => {
        let new_task_list = tasks.push(task)
        this.setState(tasks: new_task_list)
      })
      .then(() => {
        this.handleClearForm()
      })
  }

  handleClearForm() {
    this.setState({
      newTask: ''
    })
  }

  render() {
    return (
      <div className="taskList">
        <h1>Task List</h1>
        <TaskList tasks={this.state.tasks}/>
        <TaskForm
          onChangeFunction={this.handleTaskChange}
          handleFormSubmit={this.handleFormSubmit}
          content={this.state.newTask}
        />
      </div>
    )
  }
}

export default TaskContainer
