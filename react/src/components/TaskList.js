import React from 'react';
import Task from './Task';

const TaskList = (props) => {
  let tasks = props.tasks.map(task => {
    return (
      <Task
        key={task.id}
        name={task.name}
      />
    )
  })
  return (
    <ul>
      {tasks}
    </ul>
  );
}

export default TaskList;
