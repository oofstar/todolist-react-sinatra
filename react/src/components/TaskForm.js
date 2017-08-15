import React from 'react';

const TaskForm = (props) => {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <label>New Task:
        <input
          name={props.name}
          onChange={props.onChangeFunction}
          type='text'
          value={props.content}
        />
      </label>
      <input className="button" type="submit" value="Submit" />
    </form>
  );
}

export default TaskForm;
