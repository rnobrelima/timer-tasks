import React from 'react';
import FormTasks from '../Forms/formtasks';
import List from '../List/list';
import './style.scss';

function App() {
  return (
    <div className="App">
      <header className="AppStyle">
        <FormTasks></FormTasks>
        <List></List>
      </header>
    </div>
  );
}

export default App;
