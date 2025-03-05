import styles from './styles/WayPaaper.module.css'
function WayPaper({title}) {
    return (
        <div className={styles.WayPaper}>
            {title}
        </div>
    )
}
export default WayPaper;
