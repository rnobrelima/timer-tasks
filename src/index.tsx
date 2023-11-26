import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/Pages/App';
import FormTasks from './Components/Forms/formtasks';
import List from './Components/List/list'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
