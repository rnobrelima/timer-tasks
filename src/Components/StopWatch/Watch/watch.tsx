import WatchStyle from './watch.module.scss';

interface Props {
    time: number | undefined
}

export default function Watch( { time = 0 }: Readonly<Props>) {
    
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    const [minutesTen, minuteUn] = String(minutes).padStart(2,'0');
    const [secondsTen, secondsUn] = String(seconds).padStart(2,'0');

    console.log('minutes:', minutes);
    console.log('seconds:', seconds);
    return (
        <>
        <span className={WatchStyle.watchNumber}>{minutesTen}</span>
        <span className={WatchStyle.watchNumber}>{minuteUn}</span>
        <span className={WatchStyle.divider}>:</span>
        <span className={WatchStyle.watchNumber}>{secondsTen}</span>
        <span className={WatchStyle.watchNumber}>{secondsUn}</span>
        </>
    )
}