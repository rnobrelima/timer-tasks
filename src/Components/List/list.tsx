import { ITasks } from '../../Models/Tasks/tasks';
import ListStyle from '../List/list.module.scss';
import Item from './Item/item';


function List({tasks}: {tasks: ITasks[]}) {

    return (
        <aside className= {ListStyle.List}>
            <h3>Tasks</h3>
            <ul>
                {tasks.map((item, index) => (
                    <Item
                    // key={index}
                    // task= {item.task}
                    // time = {item.time}
                    //key={index.toString()}
                    {...item} // spread operator
                    >
                    </Item>
                ))}
            </ul>
        </aside>
    )

}

export default List;