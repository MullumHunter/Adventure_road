import styles from './styles/WayItem.module.css'
function WayItem({img}) {
    return(
        <img className={styles.Item} src={img} alt='way'/>
    )
}
export default WayItem;
