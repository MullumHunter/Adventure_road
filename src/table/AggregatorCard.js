import styles from "../table/styleTable/AggregatorCard.module.css"
import Button from "./Button";
import Input from "./Input";

function AggregatorCard() {
    return(
        <div className={styles.Aggregator}>
            <Input/>
            <Button text="Выбрать библиотеку"/>
        </div>
    )
}
export default AggregatorCard;
