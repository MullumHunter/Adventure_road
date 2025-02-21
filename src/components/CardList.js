import Card from "./Card";
import styles from "./styles/CardList.module.css";

function CardList({ nameLib, skills }) {
    return (
        <div className={styles.CardList}>
            <h3>{nameLib}</h3>
            {
                skills.map((skill, index) => (
                <Card key={index} skills={skill} />
                ))
            }
        </div>
    );
}

export default CardList;
