import WatchStyle from './watch.module.scss';

export default function Watch() {
    return (
        <>
        <span className={WatchStyle.watchNumber}>0</span>
        <span className={WatchStyle.watchNumber}>0</span>
        <span className={WatchStyle.divider}>:</span>
        <span className={WatchStyle.watchNumber}>0</span>
        <span className={WatchStyle.watchNumber}>0</span>
        </>
    )
}