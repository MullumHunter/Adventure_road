import styles from "../table/styleTable/AggregatorCard.module.css"
import Button from "./Button";
import Input from "./Input";
import Pop_up_menu from "./Pop_up_menu";
import {aggregatorCard} from "../components/data/cards/AggregatorCard";

function AggregatorCard() {
    return(
        <div className={styles.Aggregator}>
            <h1>Здесь будет меню</h1>
            {/*<Input/>*/}
            {/*<Button text="Выбрать библиотеку"/>*/}
            <Pop_up_menu list={aggregatorCard}/>
        </div>
    )
}
export default AggregatorCard;
