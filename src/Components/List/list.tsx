import ListStyle from '../List/list.module.scss'
import Item from './Item/item';
function List() {
    const tasks = [{
        task: 'read a book!',
        time: '00:30:00'
    },{
        task: 'write',  
        time: '00:30:00'
    }]
    return (
        <aside className= {ListStyle.List}>
            <h3>Tasks</h3>
            <ul>
                {tasks.map((item, index) => (
                    <Item
                    {...item} // spread operator
                    >
                    </Item>
                ))}
            </ul>
        </aside>
    )

}

export default List;