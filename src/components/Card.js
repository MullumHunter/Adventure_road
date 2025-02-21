import styles from './/styles/Card.module.css'
function Card({name}) {
    
    return (
        <div className={styles.Card}>
            {name}
        </div>
    )
}
export default Card;
