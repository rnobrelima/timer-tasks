import React, { useState } from 'react';
import Button from '../Button/button';
import FormTasksStyle from '../Forms/formtasks.module.scss'
import { ITasks } from '../../Models/Tasks/tasks';
import {v4 as uuidv4} from 'uuid';

interface  Props {
    setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>  
}

function FormTasks ({setTasks} : Props) {
    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:0");
    
    function addTask(change: React.FormEvent<HTMLFormElement>) {
        change.preventDefault();
        setTasks(alltasks => 
            [
                ...alltasks, 
                {
                    task,
                    time,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ] )
        setTask("");
        setTime("00:00")
    }
    return (
        <form className= {FormTasksStyle.newTask} onSubmit={addTask}>
                <div className= {FormTasksStyle.inputContainer}>
                    <label htmlFor='task'>Add Task!</label>
                    <input 
                        type="text" 
                        name="task" 
                        id="task" 
                        value={task}
                        onChange={change => setTask(change.target.value)}
                        placeholder='add task!' 
                        required />
                </div>
                <div className={FormTasksStyle.inputContainer}>
                    <label htmlFor="time">Time</label>
                    <input 
                        type="time" 
                        step="1" 
                        name="time"
                        id="time"
                        value={time}
                        onChange={change => setTime(change.target.value)}
                        min="00:00:00"
                        max="01:30:00"
                        required
                        />

                </div>
                <Button
                buttonLabel='Add'
                type='submit'
                ></Button>
            </form>
    )

    
}

// example for class component
// class FormTasks1 extends React.Component <{setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>}>{
//     state = {
//         task: "",
//         time: "00:00"
//     }

//     addTask(change: React.FormEvent<HTMLFormElement>) {
//         change.preventDefault();
//         this.props.setTasks(alltasks => 
//             [
//                 ...alltasks, 
//                 {
//                     ...this.state,
//                     selected: false,
//                     completed: false,
//                     id: uuidv4()
//                 }
//             ] )
//         this.setState(
//             {
//                 task: "",
//                 time: "00:00"
//             }
//         )
//         console.log('submit: ', this.state);
//     }

//     render() {
//         return (
//             <form className= {FormTasksStyle.newTask} onSubmit={this.addTask.bind(this)}>
//                 <div className= {FormTasksStyle.inputContainer}>
//                     <label htmlFor='task'>Add Task!</label>
//                     <input 
//                         type="text" 
//                         name="task" 
//                         id="task" 
//                         value={this.state.task}
//                         onChange={change => this.setState({...this.state, task: change.target.value})}
//                         placeholder='add task!' 
//                         required />
//                 </div>
//                 <div className={FormTasksStyle.inputContainer}>
//                     <label htmlFor="time">Time</label>
//                     <input 
//                         type="time" 
//                         step="1" 
//                         name="time"
//                         id="time"
//                         value={this.state.time}
//                         onChange={change => this.setState({...this.state, time: change.target.value })}
//                         min="00:00:00"
//                         max="01:30:00"
//                         required
//                         />

//                 </div>
//                 <Button
//                 buttonLabel='Add'
//                 type='submit'
//                 ></Button>
//             </form>
//         )

        
//     }
// }

export default FormTasks;