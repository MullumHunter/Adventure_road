import styles from './styles/wayCard.module.css'
function WayCard({img}) {
    return(<>
        <img className={styles.Card} src={img} alt="way card"/>
    </>
    )
}
export default WayCard;
