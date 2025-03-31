import styles from "../table/styleTable/TableLibrary.module.css"
import Pop_up_menu from "./Pop_up_menu";
import {aggregatorCard} from "../components/data/cards/AggregatorCard";
import Library from "../components/Library";
function TableLibrary() {
    return(
        <div className={styles.TableLibrary}>
            <div className={styles.Library}>
                <Pop_up_menu list={aggregatorCard}/>
            </div>
            <div className={styles.Cards}>
                <Library itemsLibrary={aggregatorCard}/>
            </div>
        </div>
    )
}
export default TableLibrary;
