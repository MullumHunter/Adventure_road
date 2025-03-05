import styles from './styles/HistoryItem.module.css'
function HistoryItem({img}) {
    return(
        <img className={styles.Item} src={img} alt="history"/>
    )
}
export default HistoryItem;
