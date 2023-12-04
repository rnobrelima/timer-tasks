import { ITasks } from '../../../Models/Tasks/tasks'
import  ListStyle from '../list.module.scss'

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
    }: Props) {
    return (
        <li className={`${ListStyle.item} ${selected ? ListStyle.itemSelected : ''}` }
        onClick={() => selectTask(
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
    </li>
    )
}