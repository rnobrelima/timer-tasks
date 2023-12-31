import { useEffect, useState } from "react";
import { timeToSeconds } from "../../Common/Utils/time";
import { ITasks } from "../../Models/Tasks/tasks";
import Button from "../Button/button";
import Watch from "./Watch/watch";
import StopWatchStyle from "./stopWatch.module.scss"
interface Props {
    selected: ITasks | undefined
    endTask: () => void
}

export default function StopWatch({selected, endTask}: Readonly<Props> ) {
    
    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time){
            setTime(timeToSeconds(selected.time))
        }
    }, [selected])

    function regressiveCounter(contador:number = 0 ) {
        setTimeout(() => {
            if(contador > 0) {
                setTime(contador -1);
                return regressiveCounter(contador -1)
            }
        endTask();

        }, 1000)
    }

    return (
        <div className={StopWatchStyle.stopWatch}>
            <p className={StopWatchStyle.title}>Choise a card and start the cronometer</p>
            <div className={StopWatchStyle.watchWrapper}>
            <Watch time={time} />
            </div>
            <Button
            buttonLabel='Start'
            onClick= {() => regressiveCounter(time)}
            />
        </div>
    )
}