import { ITasks } from '../../../Models/Tasks/tasks'
import  ListStyle from '../Item/item.module.scss'

interface Props extends ITasks {
    selectTask: (taskSelected: ITasks) => void 
}

export default function Item (
    { 
        task,
        time,
        selected,
        completed,
        id,
        selectTask
    }: Readonly<Props>) {
    return (
        <li className={`${ListStyle.item} ${selected ? ListStyle.itemSelected : ''} ${completed ? ListStyle.itemCompleted : ''}` }
        onClick={() => !completed && selectTask(
            {
                task,
                time,
                selected,
                completed,
                id
            }
        )}
        >
        <h3>{task}</h3>
        <span>{time}</span>
        {completed && <span className={ListStyle.done} aria-label='Item Completed!' ></span> }
    </li>
    )
}