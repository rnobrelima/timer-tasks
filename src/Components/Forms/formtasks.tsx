import React from 'react';
import Button from '../Button';
import '../Forms/style.scss'

class FormTasks extends React.Component {
    render() {
        return (
            <form className='newTask'>
                <div className='inputContainer'>
                    <label htmlFor='task'>Add Task!</label>
                    <input 
                        type="text" 
                        name="task" 
                        id="task" 
                        placeholder='add task!' 
                        required />
                </div>
                <div className='inputContainer'>
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
                <Button></Button>
            </form>
        )

        
    }
}

export default FormTasks;