import styles from "./styles/Card.module.css";

function Card({ skills }) {
    console.log(skills)
    return (
        <div className={styles.Card}>
                {
                    Object.entries(skills).map(([key, value]) => (
                    <h3>{key} : {value}</h3>))
                }
        </div>
    );
}

export default Card;
