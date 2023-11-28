import FormTasks from '../Forms/formtasks';
import List from '../List/list';
import AppStyle from './App.module.scss';

function App() {
  return (
    <div className="App">
      <header className={AppStyle.AppStyle}>
        <FormTasks></FormTasks>
        <List></List>
      </header>
    </div>
  );
}

export default App;
