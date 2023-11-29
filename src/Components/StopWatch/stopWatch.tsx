import Button from "../Button";
import Watch from "./Watch/watch";
import StopWatchStyle from "./stopWatch.module.scss"

export default function StopWatch() {
    return (
        <div className={StopWatchStyle.stopWatch}>
            <p className={StopWatchStyle.title}>Choise a card and start the cronometer</p>
            <div className={StopWatchStyle.watchWrapper}>
            <Watch></Watch>
            </div>
            <Button
            buttonLabel='Start'
            ></Button>
        </div>
    )
}