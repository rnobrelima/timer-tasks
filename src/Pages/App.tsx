import { useState } from 'react';
import FormTasks from '../Components/Forms/formtasks';
import List from '../Components/List/list';
import StopWatch from '../Components/StopWatch/stopWatch';
import AppStyle from './App.module.scss';
import { ITasks } from '../Models/Tasks/tasks';

function App() {
  const [tasks, setTasks] = useState<ITasks[] | []>([]);
  return (
    <div className="App">
      <header className={AppStyle.AppStyle}>
        <FormTasks
        setTasks={setTasks}
        ></FormTasks>
        <List
        tasks = {tasks}
        ></List>
        <StopWatch></StopWatch>
      </header>
    </div>
  );
}

export default App;
