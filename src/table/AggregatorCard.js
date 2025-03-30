import styles from "../table/styleTable/AggregatorCard.module.css"
import Button from "./Button";
import Input from "./Input";
import Pop_up_menu from "./Pop_up_menu";
import {aggregatorCard} from "../components/data/cards/AggregatorCard";
import {useState} from "react";

function AggregatorCard() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuVisible((prev) => !prev);
        console.log("y hf,jnf.")
    };
    
    return(
        <div className={styles.Aggregator}>
            <h1>Здесь будет меню</h1>
            <Input/>
            <Button text="Выбрать библиотеку" onClick={toggleMenu}/>
            {isMenuVisible && <Pop_up_menu list={aggregatorCard}/>}
        </div>
    )
}
export default AggregatorCard;
