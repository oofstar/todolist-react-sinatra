import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import TaskContainer from './containers/TaskContainer';

let reactAppRender = element => {
  ReactDOM.render(
    <TaskContainer />,
    element
  );
};

$(function() {
  let reactApp = document.getElementById('app');
  if (reactApp) {
    reactAppRender(reactApp);
  }
});
