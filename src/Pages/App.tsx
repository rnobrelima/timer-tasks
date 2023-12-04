import { useState } from 'react';
import FormTasks from '../Components/Forms/formtasks';
import List from '../Components/List/list';
import StopWatch from '../Components/StopWatch/stopWatch';
import AppStyle from './App.module.scss';
import { ITasks } from '../Models/Tasks/tasks';

function App() {
  const [tasks, setTasks] = useState<ITasks[] | []>([]);
  const [selected, setSelected ] = useState<ITasks>();

  function selectTask(taskSelected: ITasks){
    setSelected(taskSelected);
    setTasks(oldTask => oldTask.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
  }))) 
  }
  return (
    <div className="App">
      <header className={AppStyle.AppStyle}>
        <FormTasks
        setTasks={setTasks}
        ></FormTasks>
        <List
        tasks = {tasks}
        selectTask={selectTask}
        ></List>
        <StopWatch></StopWatch>
      </header>
    </div>
  );
}

export default App;
