import styles from "../table/styleTable/Pop_up_menu.module.css"
import {useEffect, useState} from "react";
function Pop_up_menu({list}) {
    const [selectedLibraries, setSelectedLibraries] = useState([]);
    
    
    useEffect(() => {
        const savedLibraries = JSON.parse(localStorage.getItem('selectedLibraries')) || [];
        setSelectedLibraries(savedLibraries);
    }, []);
    
    useEffect(() => {
        localStorage.setItem('selectedLibraries', JSON.stringify(selectedLibraries));
    }, [selectedLibraries]);
    
    const toggleSelect = (library) => {
        setSelectedLibraries((prevSelected) =>
            prevSelected.includes(library)
                ? prevSelected.filter((item) => item !== library)
                : [...prevSelected, library]
        );
    };
    
    return(
        <div>
            <h3>Названия библиотек:</h3>
            <div className={styles.Container}>
                {Object.keys(list).map((name, index) => (
                    <div className={`${styles.Item} ${selectedLibraries.includes(name) ? styles.selected : ''}`}
                         key={name} onClick={() => toggleSelect(name)}>
                        {name}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pop_up_menu;
