import React from 'react';
import Button from '../Button';
import FormTasksStyle from '../Forms/formtasks.module.scss'

class FormTasks extends React.Component {
    render() {
        return (
            <form className= {FormTasksStyle.newTask}>
                <div className= {FormTasksStyle.inputContainer}>
                    <label htmlFor='task'>Add Task!</label>
                    <input 
                        type="text" 
                        name="task" 
                        id="task" 
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
                        min="00:00:00"
                        max="01:30:00"
                        required
                        />

                </div>
                <Button
                buttonLabel='Add'
                ></Button>
            </form>
        )

        
    }
}

export default FormTasks;