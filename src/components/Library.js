import CardList from "./CardList";
import styles from '../components/styles/Library.module.css'
function Library({cards}) {
    
    return(
        <div className={styles.Library}>
            <CardList cards={cards}/>
        </div>
    )
}
export default Library;
