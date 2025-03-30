import styles from "../table/styleTable/Pop_up_menu.module.css"
import {useState} from "react";
function Pop_up_menu({list}) {
    const [selectedLibrary, setSelectedLibrary] = useState(null);
    
    const handleSelect = (library) => { setSelectedLibrary(library) };
    
    return(
        <div>
            <h3>Названия библиотек:</h3>
            <div className={styles.Container}>
                {Object.keys(list).map((name, index) => (
                    <div className={`${styles.Item} ${selectedLibrary === name? styles.selected : ``}`}
                         key={name} onClick={() => handleSelect(name)}>
                        {name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pop_up_menu;
