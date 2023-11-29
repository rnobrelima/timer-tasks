import { ITasks } from '../../../Models/Tasks/tasks'
import  ListStyle from '../list.module.scss'
export default function Item ({ task, time, selected, completed, id}: ITasks) {
    return (
        <li className={ListStyle.item}>
        <h3>{task}</h3>
        <span>{time}</span>
    </li>
    )
}