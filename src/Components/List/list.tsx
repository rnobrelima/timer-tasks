import { time } from 'console';
import { ITasks } from '../../Models/Tasks/tasks';
import ListStyle from '../List/list.module.scss';
import Item from './Item/item';

interface Props  {
    tasks: ITasks[],
    selectTask: (taskSelected: ITasks) => void
}
function List({tasks, selectTask}: Props) {


    return (
        <aside className= {ListStyle.List} >
            <h3>Tasks</h3>
            <ul>
                {tasks.map(item => (
                    <Item
                    selectTask={selectTask}
                    {...item} 
                    key={item.id} 
                    />
                   
                ))}
            </ul>
        </aside>
    )

}

export default List;