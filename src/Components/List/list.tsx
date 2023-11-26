import React from 'react';
import '../List/style.scss'
function List() {
    const tasks = [{
        task: 'read a book!',
        time: '00:30:00'
    },{
        task: 'write',  
        time: '00:30:00'
    }]
    return (
        <aside className='list'>
            <h3>Tasks</h3>
            <ul>
                {tasks.map((item, index) => (
                <li className='item' key={index}>
                    <h3>{item.task}</h3>
                    <span>{item.time}</span>
                </li>
                ))}
            </ul>
        </aside>
    )

}

export default List;